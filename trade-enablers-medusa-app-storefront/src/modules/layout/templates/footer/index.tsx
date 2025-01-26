// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"
// import Logo from "@modules/common/icons/footer-te.svg"


// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"
// import Image from "next/image"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories()

//   return (
//     <footer className="border-t border-ui-border-base bg-[#F8F9FB] w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               <Image src={Logo} alt="Trade-Enablers store" width={100} height={100} />
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <p className="txt-compact-small">
//             © {new Date().getFullYear()} Medusa Store. All rights reserved.
//           </p>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }


import Image from "next/image";
import Logo from "@modules/common/icons/footer-te.svg";
import { Twitter, Instagram } from "lucide-react";
import { Github, Facebook } from "@medusajs/icons"
import { Button } from "@medusajs/ui";


export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex justify-start flex-col items-start text-center py-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Launch Your E-Commerce today with our ready-made template.
          </h2>

          <Button variant="secondary" className="flex-1">
          <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
            View on GitHub
            <Github />
          </a>  
          </Button>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-600">
          <div className="col-span-1">
            <Image src={Logo} alt="TE Store Logo" width={80} height={80} />
            <p className="mt-4 text-gray-500 text-sm">TE Store</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Product</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Overview</li>
              <li>Features</li>
              <li>Solution</li>
              <li>Tutorials</li>
              <li>Releases</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Categories</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Apparel</li>
              <li>Furniture</li>
              <li>Electronics</li>
              <li>Beauty</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Legals</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Socials</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>©2024 Trade Enablers. All rights reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-800" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-gray-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} className="hover:text-gray-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

