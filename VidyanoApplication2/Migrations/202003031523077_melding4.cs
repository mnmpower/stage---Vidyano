namespace VidyanoApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class melding4 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Meldings", "nummer", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Meldings", "nummer", c => c.Int(nullable: false));
        }
    }
}
