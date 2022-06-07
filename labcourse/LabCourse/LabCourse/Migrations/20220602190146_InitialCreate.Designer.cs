﻿// <auto-generated />
using LabCourse.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LabCourse.Migrations
{
    [DbContext(typeof(ProfesoriDB))]
    [Migration("20220602190146_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LabCourse.models.Departamenti", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("EmriDepartamenti")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("id");

                    b.ToTable("Departamenti");
                });

            modelBuilder.Entity("LabCourse.models.Lenda", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ECTS")
                        .HasColumnType("int");

                    b.Property<string>("EmriLendes")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("id");

                    b.ToTable("Lenda");
                });

            modelBuilder.Entity("LabCourse.models.PiketProvimit", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Lendaid")
                        .HasColumnType("int");

                    b.Property<int>("Piket")
                        .HasColumnType("int");

                    b.Property<int>("Studentiid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Lendaid");

                    b.ToTable("PiketProvimit");
                });

            modelBuilder.Entity("LabCourse.models.Profesori", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Departamentiid")
                        .HasColumnType("int");

                    b.Property<string>("EmriMbiemri")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Lendaid")
                        .HasColumnType("int");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("id");

                    b.HasIndex("Departamentiid");

                    b.HasIndex("Lendaid");

                    b.ToTable("Profesoret");
                });

            modelBuilder.Entity("LabCourse.models.PiketProvimit", b =>
                {
                    b.HasOne("LabCourse.models.Lenda", "Lenda")
                        .WithMany()
                        .HasForeignKey("Lendaid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Lenda");
                });

            modelBuilder.Entity("LabCourse.models.Profesori", b =>
                {
                    b.HasOne("LabCourse.models.Departamenti", "Departamenti")
                        .WithMany()
                        .HasForeignKey("Departamentiid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LabCourse.models.Lenda", "Lenda")
                        .WithMany()
                        .HasForeignKey("Lendaid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Departamenti");

                    b.Navigation("Lenda");
                });
#pragma warning restore 612, 618
        }
    }
}