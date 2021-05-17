using System;
using System.Drawing;
using System.IO;
using System.Configuration;
using System.Drawing.Imaging;
using vrt_4103.Clases;

namespace vrt_4103
{
    class Program
    {

        static void Main(string[] args)
        {
            PathsInfo  paths = new PathsInfo();

            Console.WriteLine("Getting directrory list from screenshot");

            string[] structure = Directory.GetDirectories("/screenshots");
            foreach(string a in structure)
            {
                Console.WriteLine("directory: {0}", a);
            }
            

                decimal threadshold = Convert.ToDecimal(ConfigurationManager.AppSettings["Variationthreshold"].ToString());
            //directory creation
            if (Directory.Exists(paths.BasePath))
            {
                string[] oldReports = Directory.GetDirectories(paths.BasePath);
                foreach (string oldReport in oldReports)
                {
                    Console.WriteLine("Deleting {0}", oldReport);
                    Directory.Delete(oldReport, true);
                }
                oldReports = Directory.GetFiles(paths.BasePath);
                foreach (string oldReport in oldReports)
                {
                    Console.WriteLine("Deleting {0}", oldReport);
                    File.Delete(oldReport);
                }
            }



            // Try to create the directory.
            Console.WriteLine("Creating BaselineImages path: {0}", paths.BaselineImagesPath);
            Directory.CreateDirectory(paths.BaselineImagesPath);
            Console.WriteLine("Creating CurrentImages path: {0}", paths.CurrentImagesPath);
            Directory.CreateDirectory(paths.CurrentImagesPath);
            Console.WriteLine("Creating Differences path: {0}", paths.DifferencesImagesPath);
            Directory.CreateDirectory(paths.DifferencesImagesPath);

            Console.WriteLine("Copying README File");
            File.Copy(@"/ReportsBaseFile/README.md", paths.BasePath + @"/README.md");

            Console.WriteLine("Starting Comparison!");

            string scenarioReportList = "";
            string scenarioTemplate = File.ReadAllText( @"/ReportsBaseFile/ScenarioDetail.html");

            var scenarios = paths.getListScenarios();
            bool filesExist = true;
            int scenarioIndex = 1;
            int failedScenarios = 0;
            if (scenarios.Count == 0)
            {
                Console.WriteLine("No baseline to review");
            }
            foreach (ScenarioResult scenario in scenarios)
            {

                filesExist = true;
                string baselineImageFileName = scenario.ImageFileName;
                string currentImageFilename = scenario.ImageFileName;

                if (File.Exists(scenario.BaseImagePath))
                {
                    Console.WriteLine("Copying base image: {0}", scenario.BaseImagePath);
                    scenario.ResultsBaselineImagePath = paths.BaselineImagesPath + @"/baseline_" + scenario.ImageFileName;
                    File.Copy(scenario.BaseImagePath, scenario.ResultsBaselineImagePath);
                }
                else
                {
                    Console.WriteLine("No baseline image: {0}" ,scenario.BaseImagePath);
                    filesExist = false;
                }

                if (File.Exists(scenario.CurrentImagePath))
                {
                    Console.WriteLine("Copying current image: {0}", scenario.CurrentImagePath);
                    scenario.ResultsCurrentImagePath = paths.CurrentImagesPath + @"/current_" + scenario.ImageFileName;
                    File.Copy(scenario.CurrentImagePath, scenario.ResultsCurrentImagePath);
                }
                else
                {
                    Console.WriteLine("No current image: {0}", scenario.CurrentImagePath);
                    filesExist = false;
                }
                if (!filesExist)
                {
                    scenario.Comment = "New Scenario missing";

                    scenario.percentageChange = 100;
                    scenario.ResultsCurrentImagePath = paths.DifferencesImagesPath + @"/result_" + scenario.StepName + ".png";
                    scenario.DiffImagePath = paths.DifferencesImagesPath + @"/result_" + scenario.StepName + ".png";
                    File.Copy( @"/ReportsBaseFile/missing.png", scenario.DiffImagePath);
                }
                else
                {
                    Console.WriteLine("Comparing pixels");
                    Bitmap baselineImage = new Bitmap(scenario.BaseImagePath);
                    Bitmap currentImage = new Bitmap(scenario.CurrentImagePath);
                    Bitmap resultImage = new Bitmap(baselineImage.Width, baselineImage.Height);


                    if (baselineImage.Size != currentImage.Size)
                    {
                        scenario.Comment = "Images are of different sizes";

                        scenario.percentageChange = 100;
                        scenario.ResultsCurrentImagePath = paths.DifferencesImagesPath + @"/result_" + scenario.StepName + ".png";
                        scenario.DiffImagePath = paths.DifferencesImagesPath + @"/result_" + scenario.StepName + ".png";
                        File.Copy(@"/ReportsBaseFile/different.png", scenario.DiffImagePath);

                        
                    }
                    else
                    {

                        float diff = 0;

                        for (int y = 0; y < baselineImage.Height; y++)
                        {
                            for (int x = 0; x < baselineImage.Width; x++)
                            {
                                Color pixel1 = baselineImage.GetPixel(x, y);
                                Color pixel2 = currentImage.GetPixel(x, y);
                                int tempDiff = 0;
                                tempDiff += Math.Abs(pixel1.R - pixel2.R);
                                tempDiff += Math.Abs(pixel1.G - pixel2.G);
                                tempDiff += Math.Abs(pixel1.B - pixel2.B);
                                diff += tempDiff;
                                if (tempDiff == 0)
                                {
                                    resultImage.SetPixel(x, y, Color.FromArgb(pixel2.R, pixel2.G, pixel2.B));
                                }
                                else
                                {
                                    resultImage.SetPixel(x, y, Color.Red);
                                }
                            }
                        }
                        decimal fullsize = (decimal)(baselineImage.Width * baselineImage.Height);
                        decimal pixelDiff = (decimal)diff / 255;
                        scenario.percentageChange = decimal.Round((pixelDiff/fullsize) * 100, 2);
                        if (scenario.percentageChange >= threadshold)
                        {
                            scenario.Comment = string.Format("Difference is bigger than threshold. Difference is: {0} %", scenario.percentageChange);
                        }
                        else
                        {
                            scenario.Comment = string.Format("Difference under the change threshold. Difference is: {0} %", scenario.percentageChange);
                        }
                        scenario.DiffImagePath = paths.DifferencesImagesPath + @"/result_" + scenario.StepName + ".png";
                        resultImage.Save(scenario.DiffImagePath, ImageFormat.Png);

                    }
                    Console.WriteLine(scenario.StepName);
                    Console.WriteLine(scenario.Comment);
                    

                    scenario.ResultsBaselineImagePath = scenario.ResultsBaselineImagePath.Replace(paths.BasePath + @"/", "./").Replace(@"/", "/");
                    scenario.ResultsCurrentImagePath = scenario.ResultsCurrentImagePath.Replace(paths.BasePath + @"/", "./").Replace(@"/", "/");
                    scenario.DiffImagePath = scenario.DiffImagePath.Replace(paths.BasePath + @"/", "./").Replace(@"/", "/");
                    
                   

                }
                Console.WriteLine(scenario.Comment);
                if (scenario.percentageChange >= threadshold)
                {
                    Console.WriteLine("ResultsBaselineImagePath: {0}", scenario.ResultsBaselineImagePath);
                    Console.WriteLine("ResultsCurrentImagePath: {0}", scenario.ResultsCurrentImagePath);
                    Console.WriteLine("DiffImagePath: {0}", scenario.DiffImagePath);
                    scenarioReportList += string.Format(scenarioTemplate, "S" + scenarioIndex.ToString(), scenario.StepName, scenario.Comment, scenario.ResultsBaselineImagePath,
                                                      scenario.ResultsCurrentImagePath, scenario.DiffImagePath, scenario.ScenarioName);
                    failedScenarios += 1;
                }
                scenarioIndex += 1;
                Console.WriteLine("----------------");
            }

            int totalScenarios = paths.getTotalScenarios();
            //generateReport
            string reportTemplate = File.ReadAllText(@"/ReportsBaseFile/report.html");

            string reportContent = string.Format(reportTemplate, ConfigurationManager.AppSettings["BaselineURL"], "Ghost 3.3.0",
                                                 ConfigurationManager.AppSettings["CurrentURL"], "Ghost 3.42.5", 
                                                 DateTime.Now.ToLongDateString(), scenarios.Count, failedScenarios, scenarioReportList, threadshold, totalScenarios);

            File.Copy(@"/ReportsBaseFile/index.css", paths.BasePath + @"/index.css");
            File.WriteAllLines(paths.BasePath+@"/report.html", new string[]{ reportContent });
            Console.WriteLine("Comparing ended!");
        }

    }
}
