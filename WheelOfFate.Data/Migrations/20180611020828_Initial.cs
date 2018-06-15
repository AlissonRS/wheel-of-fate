using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WheelOfFate.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 100, nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 100, nullable: true),
                    ModifiedBy = table.Column<string>(maxLength: 100, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    ShiftsPerDay = table.Column<int>(nullable: false),
                    SkipWeekends = table.Column<bool>(nullable: false),
                    MaximumDailyShiftsPerEngineer = table.Column<int>(nullable: false),
                    MinimumRestDaysAfterSupporting = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 100, nullable: true),
                    ModifiedBy = table.Column<string>(maxLength: 100, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(maxLength: 100, nullable: false),
                    ClaimType = table.Column<string>(maxLength: 100, nullable: true),
                    ClaimValue = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Engineers",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 100, nullable: true),
                    ModifiedBy = table.Column<string>(maxLength: 100, nullable: true),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    TeamId = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Engineers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Engineers_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    UserName = table.Column<string>(maxLength: 100, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 100, nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 100, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(maxLength: 100, nullable: true),
                    SecurityStamp = table.Column<string>(maxLength: 100, nullable: true),
                    ConcurrencyStamp = table.Column<string>(maxLength: 100, nullable: true),
                    PhoneNumber = table.Column<string>(maxLength: 100, nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_User_Id",
                        column: x => x.Id,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Shifts",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 100, nullable: true),
                    ModifiedBy = table.Column<string>(maxLength: 100, nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Order = table.Column<int>(nullable: false),
                    TeamId = table.Column<string>(maxLength: 100, nullable: true),
                    EngineerId = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shifts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Shifts_Engineers_EngineerId",
                        column: x => x.EngineerId,
                        principalTable: "Engineers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Shifts_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(maxLength: 100, nullable: false),
                    ClaimType = table.Column<string>(maxLength: 100, nullable: true),
                    ClaimValue = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(maxLength: 100, nullable: false),
                    ProviderKey = table.Column<string>(maxLength: 100, nullable: false),
                    ProviderDisplayName = table.Column<string>(maxLength: 100, nullable: true),
                    UserId = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(maxLength: 100, nullable: false),
                    RoleId = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(maxLength: 100, nullable: false),
                    LoginProvider = table.Column<string>(maxLength: 100, nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    Value = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Engineers_TeamId",
                table: "Engineers",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_Shifts_EngineerId",
                table: "Shifts",
                column: "EngineerId");

            migrationBuilder.CreateIndex(
                name: "IX_Shifts_TeamId",
                table: "Shifts",
                column: "TeamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Shifts");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Engineers");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Teams");
        }
    }
}
