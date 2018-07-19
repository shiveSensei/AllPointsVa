using Microsoft.EntityFrameworkCore.Migrations;

namespace VaHelpDesk.Web.Migrations
{
    public partial class BetterData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Kind_Category_CategoryId",
                table: "Kind");

            migrationBuilder.DropForeignKey(
                name: "FK_Part Numbers_Category_CategoryId",
                table: "Part Numbers");

            migrationBuilder.DropForeignKey(
                name: "FK_Part Numbers_Kind_KindId",
                table: "Part Numbers");

            migrationBuilder.DropIndex(
                name: "IX_Part Numbers_CategoryId",
                table: "Part Numbers");

            migrationBuilder.DropIndex(
                name: "IX_Part Numbers_KindId",
                table: "Part Numbers");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Kind",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Kind_Category_CategoryId",
                table: "Kind",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Kind_Category_CategoryId",
                table: "Kind");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Kind",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Part Numbers_CategoryId",
                table: "Part Numbers",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Part Numbers_KindId",
                table: "Part Numbers",
                column: "KindId");

            migrationBuilder.AddForeignKey(
                name: "FK_Kind_Category_CategoryId",
                table: "Kind",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Part Numbers_Category_CategoryId",
                table: "Part Numbers",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Part Numbers_Kind_KindId",
                table: "Part Numbers",
                column: "KindId",
                principalTable: "Kind",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
