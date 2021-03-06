﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VaHelpDesk.Core.Features.Categories.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Facilities.Facility", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.HasKey("Id");

                    b.ToTable("Facility");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Hardwares.Hardware", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("Class");

                    b.Property<DateTime>("DeliveryDate");

                    b.Property<int>("FacilityId");

                    b.Property<bool>("InService");

                    b.Property<int>("KindId");

                    b.Property<string>("Name");

                    b.Property<int>("PartNumId");

                    b.Property<int>("Serial");

                    b.Property<DateTime>("ShipDate");

                    b.Property<int>("TrackingNum");

                    b.Property<bool>("Warranty");

                    b.Property<DateTime>("WarrantyEnd");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("FacilityId");

                    b.HasIndex("KindId");

                    b.HasIndex("PartNumId");

                    b.ToTable("Hardware");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Shared.Kind", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Kind");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Shared.PartNum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<int>("KindId");

                    b.Property<string>("Name");

                    b.Property<string>("ProdN");

                    b.HasKey("Id");

                    b.ToTable("Part Numbers");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Users.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email");

                    b.Property<string>("Password");

                    b.Property<string>("Role");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Facilities.Facility", b =>
                {
                    b.OwnsOne("VaHelpDesk.Core.Features.Shared.Address", "PhysicalAddress", b1 =>
                        {
                            b1.Property<int?>("FacilityId")
                                .ValueGeneratedOnAdd()
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("AddressLine1")
                                .HasMaxLength(64);

                            b1.Property<string>("AddressLine2")
                                .HasMaxLength(64);

                            b1.Property<string>("City")
                                .HasMaxLength(64);

                            b1.Property<string>("State")
                                .HasMaxLength(2);

                            b1.Property<string>("ZipCode")
                                .HasMaxLength(5);

                            b1.ToTable("Facility");

                            b1.HasOne("VaHelpDesk.Core.Features.Facilities.Facility")
                                .WithOne("PhysicalAddress")
                                .HasForeignKey("VaHelpDesk.Core.Features.Shared.Address", "FacilityId")
                                .OnDelete(DeleteBehavior.Cascade);
                        });
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Hardwares.Hardware", b =>
                {
                    b.HasOne("VaHelpDesk.Core.Features.Categories.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("VaHelpDesk.Core.Features.Facilities.Facility", "Facility")
                        .WithMany()
                        .HasForeignKey("FacilityId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("VaHelpDesk.Core.Features.Shared.Kind", "Kind")
                        .WithMany()
                        .HasForeignKey("KindId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("VaHelpDesk.Core.Features.Shared.PartNum", "PartNum")
                        .WithMany()
                        .HasForeignKey("PartNumId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("VaHelpDesk.Core.Features.Shared.Kind", b =>
                {
                    b.HasOne("VaHelpDesk.Core.Features.Categories.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
