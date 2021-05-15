using System;
using System.Drawing;
using System.IO;
using System.Configuration;
using System.Drawing.Imaging;

namespace VRT_4103
{
    class Program
    {

        static void Main(string[] args)
        {
            PathsInfo  paths = new PathsInfo();
            decimal threadshold = Convert.ToDecimal(ConfigurationManager.AppSettings["VariationThreadhold"].ToString());
            //directory creation
            if (Directory.Exists(paths.BasePath))
            {
                Console.WriteLine("That path exists already.");
                Directory.Delete(paths.BasePath,true);
            }

            // Try to create the directory.
            Console.WriteLine("Creating BaselineImages path");
            Directory.CreateDirectory(paths.BaselineImagesPath);
            Console.WriteLine("Creating CurrentImages path");
            Directory.CreateDirectory(paths.CurrentImagesPath);
            Console.WriteLine("Creating Differences path");
            Directory.CreateDirectory(paths.DifferencesImagesPath);
            Console.WriteLine("Starting Comparison!");

            ScenarioResult resultAssesment = new ScenarioResult();
            string baselineImagePath = @"C:\Users\jelim\OneDrive\Documentos";
            string currentImagePath = @"C:\Users\jelim\OneDrive\Escritorio";
            string baselineImageFileName = "Imagen1.png";
            string currentImageFilename = "Imagen2.png";
            resultAssesment.ScenarioName = "Prueba";
            
            resultAssesment.BaselineImagePath = paths.BaselineImagesPath + @"\baseline_" + resultAssesment.ScenarioName + "_" + baselineImageFileName;
            File.Copy(baselineImagePath + @"\"+baselineImageFileName, resultAssesment.BaselineImagePath);
            resultAssesment.CurrentImagePath = paths.CurrentImagesPath + @"\current_" + resultAssesment.ScenarioName + "_" + baselineImageFileName;
            File.Copy(currentImagePath + @"\" + currentImageFilename, resultAssesment.CurrentImagePath);

            Bitmap baselineImage = new Bitmap(baselineImagePath + @"\" + baselineImageFileName);
            Bitmap currentImage = new Bitmap(currentImagePath + @"\" + currentImageFilename);
            Bitmap resultImage = new Bitmap(baselineImage.Width, baselineImage.Height);
            

            if (baselineImage.Size != currentImage.Size)
            {
                resultAssesment.Comment = "Images are of different sizes";

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
                resultAssesment.percentageChange = decimal.Round( (decimal)diff / 255,2);
                resultAssesment.Comment = string.Format("Difference is bigger than Threadhold. Difference is: {0} %", 100 * resultAssesment.percentageChange / (baselineImage.Width * baselineImage.Height * 3));
                resultAssesment.DiffImagePath = paths.DifferencesImagesPath + @"\result_" + resultAssesment.ScenarioName + ".jpeg";
                resultImage.Save(resultAssesment.DiffImagePath, ImageFormat.Jpeg);

            }
            Console.WriteLine(resultAssesment.Comment);

            //generateReport
            string reportTemplate = File.ReadAllText(@".\ReportsBaseFile\report.html");
            string scenarioTemplate = File.ReadAllText(@".\ReportsBaseFile\ScenarioDetail.html");
            resultAssesment.BaselineImagePath = resultAssesment.BaselineImagePath.Replace(paths.BasePath+@"\", "./").Replace(@"\","/");
            resultAssesment.CurrentImagePath = resultAssesment.CurrentImagePath.Replace(paths.BasePath + @"\", "./").Replace(@"\", "/"); ;
            resultAssesment.DiffImagePath = resultAssesment.DiffImagePath.Replace(paths.BasePath + @"\", "./").Replace(@"\", "/"); ;
            string scenarioReportList = string.Format(scenarioTemplate, resultAssesment.Comment, resultAssesment.BaselineImagePath,
                                                      resultAssesment.CurrentImagePath, resultAssesment.DiffImagePath);

            string reportContent = string.Format(reportTemplate, @"https://Ghost", "Ghost", DateTime.Now.ToLongDateString(), resultAssesment.ScenarioName, scenarioReportList);
            File.Copy(@".\ReportsBaseFile\index.css", paths.BasePath + @"\index.css");
            File.WriteAllLines(paths.BasePath+@"\report.html", new string[]{ reportContent });
            Console.WriteLine("Starting ended!");
        }

    }
}
