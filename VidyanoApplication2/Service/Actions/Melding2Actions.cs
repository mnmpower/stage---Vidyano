using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidyano.Service.Repository;

namespace VidyanoApplication2.Service.Actions
{
    public class Melding2
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public string Text { get; set; }
    }

    public class Melding2Actions : PersistentObjectActionsReference<EersteTestStageEntityModelContainer, Melding2>
    {
        public override void OnNew(PersistentObject obj, PersistentObject parent, Query query, Dictionary<string, string> parameters)
        {
            base.OnNew(obj, parent, query, parameters);
        }

        public override void OnSave(PersistentObject obj)
        {
            base.OnSave(obj);
        }
    }
}