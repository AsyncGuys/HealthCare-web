import eye from '../Assets/Card/eye.jpg'
import dia from '../Assets/Card/diabeties.jpeg'
import liver from '../Assets/Card/liver.jpeg'
import mri from '../Assets/Card/MRI.webp'
import skin from '../Assets/Card/skin.jpg'
import heart from '../Assets/Card/heart.jpg'
import alzihmer from '../Assets/Card/alzihmer.jpeg'
export default [
   {
      name:'Alzheimer',
      description:"Alzheimer's disease is a brain disorder that slowly destroys memory and thinking skills and, eventually, the ability to carry out the simplest tasks.",
      image:alzihmer,
      moreinfo:"https://www.nia.nih.gov/health/what-alzheimers-disease",
      route:'alzheimer'
},
   {
      name:'Tumor',
      description:"A tumor is a solid mass of tissue that forms when abnormal cells group together. Tumors can affect bones, skin, tissue, organs and glands. Many tumors are not cancer (they're benign)",
      image:mri,
      moreinfo:"https://my.clevelandclinic.org/health/diseases/21881-tumor",
      route:'tumor'
   },
   {
      name:'Eye',
      description:"The leading causes of blindness and low vision in the United States are primarily age-related eye diseases such as age-related macular degeneration, cataract, diabetic retinopathy, and glaucoma.Other common eye disorders include amblyopia and strabismus.",
      image:eye,
      moreinfo:"https://www.cdc.gov/visionhealth/basics/ced/index.html",
      route:'eye'
   },
   {
         name:'Liver',
         description:"The leading causes of blindness and low vision in the United States are primarily age-related eye diseases such as age-related macular degeneration, cataract, diabetic retinopathy, and glaucoma.Other common eye disorders include amblyopia and strabismus.",
         image:liver,
         moreinfo:"https://www.cdc.gov/visionhealth/basics/ced/index.html",
         route:'liver'
   },
   {
         name:'Heart',
         description:"(hart dih-ZEEZ) A type of disease that affects the heart or blood vesselsThe risk of certain heart diseases may be increased by smoking, high blood pressure, high cholesterol, unhealthy diet, lack of exercise, and obesity.",
         image:heart,
         moreinfo:"https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118",
         route:'heart'
   },
      {
         name:'Diabetes',
         description:"Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream.",
         image:dia,
         moreinfo:"https://www.cdc.gov/diabetes/basics/diabetes.html",
         route:'diabetes'
      },

]