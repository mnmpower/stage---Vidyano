using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Vidyano.Service.Repository;

namespace VidyanoApplication2.Service.Actions
{
    public class Melding
    {
        [Key]
        public long id { get; set; }
        public int? nummer { get; set; }
        public string melding { get; set; }
    }

    public class MeldingActions: PersistentObjectActionsReference<EersteTestStageEntityModelContainer, Melding>
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