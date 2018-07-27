using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VaHelpDesk.Web.Migrations
{
    public partial class BetterHardware : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Hardware_Category_CategoryId",
                table: "Hardware");

            migrationBuilder.DropForeignKey(
                name: "FK_Hardware_Facility_FacilityId",
                table: "Hardware");

            migrationBuilder.DropForeignKey(
                name: "FK_Hardware_Kind_KindId",
                table: "Hardware");

            migrationBuilder.DropForeignKey(
                name: "FK_Hardware_Part Numbers_PartNumId",
                table: "Hardware");

            migrationBuilder.DropIndex(
                name: "IX_Hardware_CategoryId",
                table: "Hardware");

            migrationBuilder.DropIndex(
                name: "IX_Hardware_FacilityId",
                table: "Hardware");

            migrationBuilder.DropIndex(
                name: "IX_Hardware_KindId",
                table: "Hardware");

            migrationBuilder.DropIndex(
                name: "IX_Hardware_PartNumId",
                table: "Hardware");

            migrationBuilder.AlterColumn<string>(
                name: "Serial",
                table: "Hardware",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "Task Items",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Details = table.Column<string>(nullable: false),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsComplete = table.Column<bool>(nullable: false),
                    List = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Task Items", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Task Items");

            migrationBuilder.AlterColumn<int>(
                name: "Serial",
                table: "Hardware",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Hardware_Category_CategoryId",
                table: "Hardware",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hardware_Facility_FacilityId",
                table: "Hardware",
                column: "FacilityId",
                principalTable: "Facility",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hardware_Kind_KindId",
                table: "Hardware",
                column: "KindId",
                principalTable: "Kind",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Hardware_Part Numbers_PartNumId",
                table: "Hardware",
                column: "PartNumId",
                principalTable: "Part Numbers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
