using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VaHelpDesk.Web.Migrations
{
    public partial class DataAnn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 64, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Facility",
                columns: table => new
                {
                    Name = table.Column<string>(maxLength: 64, nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PhysicalAddress_AddressLine1 = table.Column<string>(maxLength: 64, nullable: true),
                    PhysicalAddress_AddressLine2 = table.Column<string>(maxLength: 64, nullable: true),
                    PhysicalAddress_ZipCode = table.Column<string>(maxLength: 5, nullable: true),
                    PhysicalAddress_City = table.Column<string>(maxLength: 64, nullable: true),
                    PhysicalAddress_State = table.Column<string>(maxLength: 2, nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facility", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Role = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Kind",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 64, nullable: false),
                    CategoryId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kind", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Kind_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Part Numbers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProdN = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false),
                    KindId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Part Numbers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Part Numbers_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Part Numbers_Kind_KindId",
                        column: x => x.KindId,
                        principalTable: "Kind",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Hardware",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Serial = table.Column<int>(nullable: false),
                    Class = table.Column<string>(nullable: true),
                    InService = table.Column<bool>(nullable: false),
                    Warranty = table.Column<bool>(nullable: false),
                    PartNumId = table.Column<int>(nullable: false),
                    ShipDate = table.Column<DateTime>(nullable: false),
                    DeliveryDate = table.Column<DateTime>(nullable: false),
                    WarrantyEnd = table.Column<DateTime>(nullable: false),
                    TrackingNum = table.Column<int>(nullable: false),
                    FacilityId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    KindId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hardware", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Hardware_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Hardware_Facility_FacilityId",
                        column: x => x.FacilityId,
                        principalTable: "Facility",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Hardware_Kind_KindId",
                        column: x => x.KindId,
                        principalTable: "Kind",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Hardware_Part Numbers_PartNumId",
                        column: x => x.PartNumId,
                        principalTable: "Part Numbers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Category_Name",
                table: "Category",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Hardware_CategoryId",
                table: "Hardware",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Hardware_FacilityId",
                table: "Hardware",
                column: "FacilityId");

            migrationBuilder.CreateIndex(
                name: "IX_Hardware_KindId",
                table: "Hardware",
                column: "KindId");

            migrationBuilder.CreateIndex(
                name: "IX_Hardware_PartNumId",
                table: "Hardware",
                column: "PartNumId");

            migrationBuilder.CreateIndex(
                name: "IX_Kind_CategoryId",
                table: "Kind",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Kind_Name",
                table: "Kind",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Part Numbers_CategoryId",
                table: "Part Numbers",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Part Numbers_KindId",
                table: "Part Numbers",
                column: "KindId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hardware");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Facility");

            migrationBuilder.DropTable(
                name: "Part Numbers");

            migrationBuilder.DropTable(
                name: "Kind");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
