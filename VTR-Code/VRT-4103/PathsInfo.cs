using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace VRT_4103
{
    public class PathsInfo
    {

        public string BasePath
        {
            get
            {
                return ConfigurationManager.AppSettings["OutputPath"];
            }
        }

        public string BaselineImagesPath
        {
            get
            {
                return BasePath + @"\BaselineImages";
            }
        }
        public string CurrentImagesPath
        {
            get
            {
                return BasePath + @"\CurrentImages";
            }
        } 
        public string DifferencesImagesPath
        {
            get
            {
                return BasePath + @"\Differences";
            }
        }
    }
}
