using Castle.MicroKernel.SubSystems.Conversion;
using Microsoft.Build.Framework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;

namespace ProductApi.Core.Entities
{
    public class Product
    {
        [Required]

        public string ProductID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Title { get; set; }

        [Required]

        public int Price { get; set; }

        [Required]

        public string Color { get; set; }
       

        public bool inStock { get; set; }
       

        public string Details { get; set; }
        [Required]

        public int Quantity { get; set; }

       

        public int Rating { get; set; }

        [Column(TypeName = "Date")]
        public DateTime ExpiryDate { get; set; }
        public string ImageURL { get; set; }





    }
}
