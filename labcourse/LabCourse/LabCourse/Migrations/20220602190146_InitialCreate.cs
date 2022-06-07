using Microsoft.EntityFrameworkCore.Migrations;

namespace LabCourse.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departamenti",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriDepartamenti = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departamenti", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Lenda",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriLendes = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ECTS = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lenda", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PiketProvimit",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Piket = table.Column<int>(type: "int", nullable: false),
                    Studentiid = table.Column<int>(type: "int", nullable: false),
                    Lendaid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PiketProvimit", x => x.id);
                    table.ForeignKey(
                        name: "FK_PiketProvimit_Lenda_Lendaid",
                        column: x => x.Lendaid,
                        principalTable: "Lenda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Profesoret",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriMbiemri = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Lendaid = table.Column<int>(type: "int", nullable: false),
                    Departamentiid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profesoret", x => x.id);
                    table.ForeignKey(
                        name: "FK_Profesoret_Departamenti_Departamentiid",
                        column: x => x.Departamentiid,
                        principalTable: "Departamenti",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Profesoret_Lenda_Lendaid",
                        column: x => x.Lendaid,
                        principalTable: "Lenda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PiketProvimit_Lendaid",
                table: "PiketProvimit",
                column: "Lendaid");

            migrationBuilder.CreateIndex(
                name: "IX_Profesoret_Departamentiid",
                table: "Profesoret",
                column: "Departamentiid");

            migrationBuilder.CreateIndex(
                name: "IX_Profesoret_Lendaid",
                table: "Profesoret",
                column: "Lendaid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PiketProvimit");

            migrationBuilder.DropTable(
                name: "Profesoret");

            migrationBuilder.DropTable(
                name: "Departamenti");

            migrationBuilder.DropTable(
                name: "Lenda");
        }
    }
}
