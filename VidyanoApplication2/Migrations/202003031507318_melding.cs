namespace VidyanoApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class melding : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Meldings",
                c => new
                    {
                        id = c.Long(nullable: false, identity: true),
                        nummer = c.Int(nullable: false),
                        melding = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Meldings");
        }
    }
}
