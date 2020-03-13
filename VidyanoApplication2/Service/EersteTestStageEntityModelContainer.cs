using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using Vidyano.Core.Extensions;
using Vidyano.Service;
using Vidyano.Service.Repository;
using VidyanoApplication2.Service.Actions;

namespace VidyanoApplication2.Service
{
    public partial class EersteTestStageEntityModelContainer : TargetDbContext
    {
        public DbSet<Melding> meldings { get; set; }
        public DbSet<Melding2> melding2s { get; set; }
    }
}