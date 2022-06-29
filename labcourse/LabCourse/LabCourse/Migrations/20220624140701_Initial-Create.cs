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
                name: "Login",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Login", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profa",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriMbiemri = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profa", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Register",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Register", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Semestri",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lokacioni = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Semestrat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Orari = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Semestri", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Studenti",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriMbiemri = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    DataLindjes = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Qyteti = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Departamentiid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Studenti", x => x.id);
                    table.ForeignKey(
                        name: "FK_Studenti_Departamenti_Departamentiid",
                        column: x => x.Departamentiid,
                        principalTable: "Departamenti",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Lenda",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmriLendes = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ECTS = table.Column<int>(type: "int", nullable: false),
                    ProfaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lenda", x => x.id);
                    table.ForeignKey(
                        name: "FK_Lenda_Profa_ProfaId",
                        column: x => x.ProfaId,
                        principalTable: "Profa",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Grupi",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Zgjedhgrupin = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Studentiid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grupi", x => x.id);
                    table.ForeignKey(
                        name: "FK_Grupi_Studenti_Studentiid",
                        column: x => x.Studentiid,
                        principalTable: "Studenti",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ParaqitProvimet",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lendaid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParaqitProvimet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ParaqitProvimet_Lenda_Lendaid",
                        column: x => x.Lendaid,
                        principalTable: "Lenda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.CreateTable(
                name: "Provimet",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lendaid = table.Column<int>(type: "int", nullable: false),
                    Kategoria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Profesori = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataProvimit = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KohaProvimit = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provimet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Provimet_Lenda_Lendaid",
                        column: x => x.Lendaid,
                        principalTable: "Lenda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Grupi_Studentiid",
                table: "Grupi",
                column: "Studentiid");

            migrationBuilder.CreateIndex(
                name: "IX_Lenda_ProfaId",
                table: "Lenda",
                column: "ProfaId");

            migrationBuilder.CreateIndex(
                name: "IX_ParaqitProvimet_Lendaid",
                table: "ParaqitProvimet",
                column: "Lendaid");

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

            migrationBuilder.CreateIndex(
                name: "IX_Provimet_Lendaid",
                table: "Provimet",
                column: "Lendaid");

            migrationBuilder.CreateIndex(
                name: "IX_Studenti_Departamentiid",
                table: "Studenti",
                column: "Departamentiid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Grupi");

            migrationBuilder.DropTable(
                name: "Login");

            migrationBuilder.DropTable(
                name: "ParaqitProvimet");

            migrationBuilder.DropTable(
                name: "PiketProvimit");

            migrationBuilder.DropTable(
                name: "Profesoret");

            migrationBuilder.DropTable(
                name: "Provimet");

            migrationBuilder.DropTable(
                name: "Register");

            migrationBuilder.DropTable(
                name: "Semestri");

            migrationBuilder.DropTable(
                name: "Studenti");

            migrationBuilder.DropTable(
                name: "Lenda");

            migrationBuilder.DropTable(
                name: "Departamenti");

            migrationBuilder.DropTable(
                name: "Profa");
        }
    }
}
