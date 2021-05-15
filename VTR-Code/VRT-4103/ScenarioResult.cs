using System;
using System.Collections.Generic;
using System.Text;

namespace VRT_4103
{
    public class ScenarioResult
    {
        public string ImageFileName { get; set; }
        public string ScenarioName { get; set; }
        public string BaselineImagePath { get; set; }
        public string CurrentImagePath { get; set; }
        public string DiffImagePath { get; set; }

        public decimal percentageChange { get; set; }

        public string Comment { get; set; }

    }
}
