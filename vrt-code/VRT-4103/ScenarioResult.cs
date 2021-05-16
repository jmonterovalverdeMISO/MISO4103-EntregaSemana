using System;
using System.Collections.Generic;
using System.Text;

namespace vrt_4103.Clases
{
    public class ScenarioResult
    {
        public string CurrentImagePath { get; set; }
        public string BaseImagePath { get; set; }
        public string ImageFileName { get; set; }
        public string StepName { get; set; }
        public string ScenarioName { get; set; }
        public string ResultsBaselineImagePath { get; set; }
        public string ResultsCurrentImagePath { get; set; }
        public string SourceBaselineImagePath { get; set; }
        public string SourceCurrentImagePath { get; set; }
        public string DiffImagePath { get; set; }

        public decimal percentageChange { get; set; }

        public string Comment { get; set; }

    }
}
