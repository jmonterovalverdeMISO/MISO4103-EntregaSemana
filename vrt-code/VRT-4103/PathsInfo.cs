using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Text;

namespace vrt_4103.Clases
{
    public class PathsInfo
    {

        public string BasePath
        {
            get
            {
                return  ConfigurationManager.AppSettings["OutputPath"];
            }
        }

        public string BaselineImagesPath
        {
            get
            {
                return BasePath + @"/BaselineImages";
            }
        }
        public string CurrentImagesPath
        {
            get
            {
                return BasePath + @"/CurrentImages";
            }
        } 
        public string DifferencesImagesPath
        {
            get
            {
                return BasePath + @"/Differences";
            }
        }

        public int getTotalScenarios()
        {
            int totalScenarios = 0;
            string baselinePath = ConfigurationManager.AppSettings["screenshots"] + @"/3.3.0";
            List<ScenarioResult> listScenarios = new List<ScenarioResult>();
            if (Directory.Exists(baselinePath))
            {
                totalScenarios = Directory.GetDirectories(baselinePath).Length;
            }
            return totalScenarios;
        }

        public List<ScenarioResult> getListScenarios()
        {
            string baselinePath = ConfigurationManager.AppSettings["screenshots"] + @"/3.3.0";
            string currentPath = ConfigurationManager.AppSettings["screenshots"] + @"/3.42.5";
            List<ScenarioResult> listScenarios = new List<ScenarioResult>();
            if (Directory.Exists(baselinePath))
            {
                string[] directories = Directory.GetDirectories(baselinePath);

                foreach (string directory in directories)
                {
                    string[] secondaryDirectories = Directory.GetDirectories(directory);
                    foreach (string scenario in secondaryDirectories)
                    {
                        string[] testSteps = Directory.GetFiles(scenario);
                        foreach (string step in testSteps)
                        {
                            ScenarioResult test = new ScenarioResult
                            {
                                SourceBaselineImagePath = baselinePath,
                                SourceCurrentImagePath = currentPath,
                                ImageFileName = Path.GetFileName(step),
                                BaseImagePath = step,
                                CurrentImagePath = currentPath + @"/" + Path.GetFileName(directory) + @"/" + Path.GetFileName(scenario) + @"/" + Path.GetFileName(step),
                                StepName = Path.GetFileNameWithoutExtension(step),
                                ScenarioName = Path.GetFileName(directory)
                            };
                            listScenarios.Add(test);
                        }
                    }
                }
            }
            return listScenarios;
        }
    }
}
