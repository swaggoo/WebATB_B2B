using System.Collections.Generic;
using Terrasoft.Common;
using Terrasoft.Configuration;

namespace WebATB_B2B
{
    public class WatbAccountStatusRemindingText : IRemindingTextFormer
    {
        public string GetBody(IDictionary<string, object> formParameters) 
        {
            formParameters.CheckArgumentNull("formParameters");
            var accountName = (string)formParameters["AccountName"];
            var body = $"У контрагента {accountName} не заповнені всі обов'язкові поля.";
            
            return body;
        }
        
        public string GetTitle(IDictionary<string, object> formParameters)
        {
            return "Заповніть обов'язкові поля";
        }
    }
}