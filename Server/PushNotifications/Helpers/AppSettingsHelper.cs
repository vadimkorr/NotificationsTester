using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Web;

namespace PushNotifications.Helpers
{
    public class AppSettingsHelper
    {
        public static T GetValue<T>(string name, T defaultValue = default(T))
        {
            if (!ConfigurationManager.AppSettings.AllKeys.Contains(name))
            {
                return defaultValue;
            }
            string stringValue = ConfigurationManager.AppSettings[name];
            if (Type.GetTypeCode(typeof(T)) == TypeCode.Double)
            {
                stringValue = stringValue.Replace(".", NumberFormatInfo.CurrentInfo.NumberDecimalSeparator);
                stringValue = stringValue.Replace(",", NumberFormatInfo.CurrentInfo.NumberDecimalSeparator);
            }

            TypeConverter conv = TypeDescriptor.GetConverter(typeof(T));

            T value = (T)conv.ConvertFrom(stringValue);
            return value;
        }

        public static string GetString(string name, string defaultValue = "")
        {
            return GetValue(name, defaultValue);
        }
    }
}