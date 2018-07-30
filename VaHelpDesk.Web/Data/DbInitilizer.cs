﻿using System.Linq;
using System;
using Microsoft.Extensions.DependencyInjection;
using VaHelpDesk.Core.Features.Shared;
using VaHelpDesk.Core.Features.Hardwares;
using VaHelpDesk.Core.Features.Users;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Web.Helpers;
using VaHelpDesk.Core.Features.Categories;
using VaHelpDesk.Core.Features.TaskItem;

namespace VaHelpDesk.Web.Data
{
    public static class DbInitilizer
    {
        
        public static void Initialize(DataContext context)
        {
            if (context.Facilities.Any())
            {
                return; //DB has been seeded
            }
            var facilities = new Facility[] {
                new Facility
                {
                    Name = "Southern Arizona VA HCS (678) VHA",
                    PhysicalAddress = new Address
                    {
                        AddressLine1 = "3601 South 6th Ave",
                        AddressLine2 = "Bldg 14",
                        City = "Tuscon",
                        State = "AZ",
                        ZipCode = "85723"
                    }
                },
                new Facility
                {
                   Name = "Alexandria VA HCS (502) VHA",
                   PhysicalAddress = new Address
                   {
                       AddressLine1 = "​2495 Shreveport Highway",
                       City = "Pineville",
                       State = "LA",
                       ZipCode = "71360"
                   }
                },
                new Facility
                {
                    Name = "Altoona - James E. Van Zandt VAMC (503) VHA",
                    PhysicalAddress = new Address
                    {
                        AddressLine1 = "​2907 Pleasant Valley Blvd",
                        City = "Altonna",
                        State = "PA",
                        ZipCode = "16602"
                    }
                },
                new Facility
                {
                   Name = "​Cheyenne VAMC (442) VHA",
                   PhysicalAddress = new Address
                   {
                       AddressLine1 = "​2360 E. Pershing Blvd",
                       City = "Cheyenne",
                       State = "WY",
                       ZipCode = "82009"
                   }
                }
            };
            foreach (Facility f in facilities)
            {
                context.Add(f);
            }
            context.SaveChanges();

            var taskItems = new TaskItem[] {
                new TaskItem
                {
                    Name = "Knocking Users Offline",
                    Details = "Fix weird update issue that's knocking users offline randomly",
                    IsComplete = false,
                    List= TaskList.SysAdmin
                },
                new TaskItem
                {
                    Name = "Update Server",
                    Details = "New server version was just released, update",
                    IsComplete = false,
                    List= TaskList.SysAdmin
                },
                new TaskItem
                {
                    Name = "Complete Training",
                    Details = "Sign contract for What are conference organizers afraid of?",
                    IsComplete = false,
                    List= TaskList.SysAdmin
                },
                new TaskItem
                {
                    Name = "Adobe CC suites",
                    Details = "Get access to the Adobe CC suites",
                    IsComplete = false,
                    List= TaskList.WebDev
                },
                new TaskItem
                {
                    Name = "Make a Decision",
                    Details = "Decide on using asp.NET or some other framework for website rebuild",
                    IsComplete = false,
                    List= TaskList.WebDev
                },
                new TaskItem
                {
                    Name = "Missing Elete Book",
                    Details = "Find unit missing in VA 506?",
                    IsComplete = false,
                    List= TaskList.VaHelpDesk
                },
                new TaskItem
                {
                    Name = "Be Innovative!",
                    Details = "Create 4 Invisible User Experiences you Never Knew About",
                    IsComplete = false,
                    List= TaskList.VaHelpDesk
                },
                new TaskItem
                {
                    Name = "Hit him up",
                    Details = "Contact Mr. Chow about the bulk issue hes having at VA 321",
                    IsComplete = false,
                    List= TaskList.VaHelpDesk
                },
                new TaskItem
                {
                    Name = "Fix Group Box",
                    Details = "Why aren't emails coming to the group box",
                    IsComplete = false,
                    List= TaskList.VaHelpDesk
                }

            };
            foreach (TaskItem t in taskItems)
            {
                //add part numbers to Categories
                context.Add(t);
            }
            context.SaveChanges();

            var categories = new Category[] {
                new Category
                {
                    Name = "Monitor",
                },
                new Category
                {
                    Name = "Laptop",

                },
                new Category
                {
                    Name = "Desktop",

                },
                new Category
                {
                    Name = "All In One",
                }
            };
            foreach (Category c in categories)
            {
                //add part numbers to Categories
                context.Add(c);
            }
            context.SaveChanges();


            var kinds = new Kind[]
              {
               new Kind
               {
                    Name = "Monitor",
                    Category = categories.Single(c=> c.Name =="Monitor")
               },
               new Kind
               {
                    Name = "Light",
                    Category = categories.Single(c=> c.Name =="Laptop")
               },
               new Kind
               {
                    Name = "Medium",
                    Category = categories.Single(c=> c.Name =="Laptop")
               },
               new Kind
               {
                    Name = "Heavy",
                    Category = categories.Single(c=> c.Name =="Laptop")
               },
               new Kind
               {
                    Name = "Small",
                    Category = categories.Single(c=> c.Name =="Desktop")
               },
               new Kind
               {
                    Name = "Mini Tower",
                    Category = categories.Single(c=> c.Name =="Desktop")
               },
               new Kind
               {
                    Name = "Ultra Small",
                    Category = categories.Single(c=> c.Name =="Desktop")
               },
               new Kind
               {
                    Name = "All In One",
                    Category = categories.Single(c=> c.Name =="All In One")
               }
              };
            foreach (Kind k in kinds)
            {
                context.Add(k);
            }
            context.SaveChanges();


            var partNums = new PartNum[]
            {
                new PartNum
                {
                    ProdN = "2TJ21UC#ABA",
                    Name = "HP ProDesk 600 G3",
                    CategoryId = categories.Single(c=> c.Name == "Desktop").Id,
                    KindId = kinds.Single(k => k.Name == "Mini Tower").Id
               
                },
                new PartNum
                {
                    ProdN = "2TK78UC#ABA",
                    Name = "HP ProBook 640 G2 14",
                    CategoryId = categories.Single(c=> c.Name == "Laptop").Id,
                    KindId = kinds.Single(k => k.Name == "Light").Id

                },
                new PartNum
                {
                    ProdN = "2TK79UC#ABA",
                    Name = "HP ProBook 640 G2 14",
                    CategoryId = categories.Single(c=> c.Name == "Laptop").Id,
                    KindId = kinds.Single(k => k.Name == "Heavy").Id

                },
                new PartNum
                {
                    ProdN = "2TK81UC#ABA",
                    Name = "HP ZBook 17 G3 17.3",
                    CategoryId = categories.Single(c=> c.Name == "Laptop").Id,
                    KindId = kinds.Single(k => k.Name == "Medium").Id

                },
                new PartNum
                {
                    ProdN = "2TK84UC#ABA",
                    Name = "HP EliteBook 820 G3 12.5",
                    CategoryId = categories.Single(c=> c.Name == "Laptop").Id,
                    KindId = kinds.Single(k => k.Name == "Light").Id

                },
                new PartNum
                {
                    ProdN = "3AN52UC#ABA",
                    CategoryId = categories.Single(c=> c.Name == "Desktop").Id,
                    Name = "HP ProDesk 600 G3",
                    KindId = kinds.Single(k => k.Name == "Small").Id

                },
                new PartNum
                {
                    ProdN = "3AN53UC#ABA",
                    Name = "HP EliteDesk 800 G3",
                    CategoryId = categories.Single(c=> c.Name == "Desktop").Id,
                    KindId = kinds.Single(k => k.Name == "Small").Id

                },
                new PartNum
                {
                    ProdN = "3AN54UC#ABA",
                    Name = "HP EliteDesk 800 G3",
                    CategoryId = categories.Single(c=> c.Name == "Desktop").Id,
                    KindId = kinds.Single(k => k.Name == "Small").Id

                },
                new PartNum
                {
                    ProdN = "D9Y32AA#ABA",
                    Name = "HP UltraSlim Docking Station",
                    CategoryId = categories.Single(c=> c.Name == "All In One").Id,
                    KindId = kinds.Single(k => k.Id == 8).Id

                },
                new PartNum
                {
                    ProdN = "DP2DVI2MM6-VA",
                    Name = "Display Port to DVI",
                    CategoryId = categories.Single(c=> c.Name == "All In One").Id,
                    KindId = kinds.Single(k => k.Id == 8).Id

                },
                new PartNum
                {
                    ProdN = "M1F41AA#ABA",
                    Name = "HP EliteDisplay E202 Monitor US",
                    CategoryId = categories.Single(c=> c.Name == "Monitor").Id,
                    KindId = kinds.Single(k => k.Name == "Monitor").Id

                },
                new PartNum
                {
                    ProdN = "N2U81AA#ABA",
                    Name = "HP UHD USB Graphics Adapter US",
                    CategoryId = categories.Single(c=> c.Name == "All In One").Id,
                    KindId = kinds.Single(k => k.Id == 8).Id

                },
                new PartNum
                {
                    ProdN = "QY777AA",
                    Name = "HP USB Mouse",
                    CategoryId = categories.Single(c=> c.Name == "All In One").Id,
                    KindId = kinds.Single(k => k.Id == 8).Id

                },
                new PartNum
                {
                    ProdN = "Z9H48AA#ABA",
                    Name = "HP Business Slim Smartcard Keyboard",
                    CategoryId = categories.Single(c=> c.Name == "All In One").Id,
                    KindId = kinds.Single(k => k.Id == 8).Id

                }
            };
            foreach(PartNum p in partNums)
            {
                    context.Add(p);
            }
            context.SaveChanges();
            
            //var users = new User[] {
            //    new User
            //    {
            //        Email = $"admin@allpointsllc.com",
            //        Password = CryptoHelpers.HashPassword("password"),
            //        Role = "Admin"
            //    }
            //};
            //foreach(User u in users)
            //{
            //    context.Add(u);
            //}
            //context.SaveChanges();

            var hardwares = new Hardware[] {
                new Hardware
                {
                    Serial = "CND4562LL",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "3AN54UC#ABA").Id,
                    ShipDate = DateTime.Now.Date,
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 5423345,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND5213KL",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "2TJ21UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 2098732,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND1209LL",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "2TK78UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 365434,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND6893LL",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "2TK79UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 2567892,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND2945WT",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "2TK81UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 987652,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND5923FK",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "2TK84UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 27678783,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND87231ND",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "3AN52UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 5436542,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                },
                new Hardware
                {
                    Serial = "CND9021LL",
                    Class = "Hardware",
                    InService = false,
                    Warranty = true,
                    PartNumId = partNums.Single(p => p.ProdN == "3AN53UC#ABA").Id,
                    ShipDate = DateTime.Parse("2018-01-01"),
                    DeliveryDate = DateTime.Parse("2018-01-01"),
                    TrackingNum = 2214321,
                    FacilityId = facilities.Single(f => f.PhysicalAddress.ZipCode == "85723").Id
                }

            };
            foreach (Hardware h in hardwares)
            {
                h.Name = partNums.Single(p => p.Id == h.PartNumId).Name;
                h.KindId = partNums.Single(p => p.Id == h.PartNumId).KindId;
                h.CategoryId = partNums.Single(p => p.Id == h.PartNumId).CategoryId;


                //add warranty end date
                h.WarrantyEnd = h.ShipDate.AddYears(1);
                context.Add(h);
            }
            context.SaveChanges();
        }
    }
}