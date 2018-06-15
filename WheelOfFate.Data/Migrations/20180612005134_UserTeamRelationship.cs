using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WheelOfFate.Data.Migrations
{
    public partial class UserTeamRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserTeam",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 100, nullable: true),
                    ModifiedBy = table.Column<string>(maxLength: 100, nullable: true),
                    UserId = table.Column<string>(maxLength: 100, nullable: true),
                    TeamId = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTeam", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserTeam_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserTeam_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserTeam_TeamId",
                table: "UserTeam",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_UserTeam_UserId",
                table: "UserTeam",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserTeam");
        }
    }
}
