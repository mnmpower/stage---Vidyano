namespace VidyanoApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class melding2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Melding2",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Melding2");
        }
    }
}
