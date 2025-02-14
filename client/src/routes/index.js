import { lazy } from "react";

// Layouts
const AdminLayout = lazy(() => import("../layouts/Admin"));
const CustomerLayout = lazy(() => import("../layouts/Customer"));
const ProfileLayout = lazy(() => import("../layouts/Profile"));

// Profile Pages
const ProfileDetails = lazy(() => import("../pages/Profile/Details"));
const ProfileOrders = lazy(() => import("../pages/Profile/Orders"));
const ProfileChats = lazy(() => import("../pages/Profile/Chats"));
const AddressBook = lazy(() => import("../pages/Profile/AddressBook"));

// Customer Pages
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Blog = lazy(() => import("../pages/Blog"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Collection = lazy(() => import("../components/Collections"));
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const Shop = lazy(() => import("../components/Shop"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));

// Admin Pages
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Products = lazy(() => import("../pages/Products"));
const Categories = lazy(() => import("../pages/Categories"));
const Discounts = lazy(() => import("../pages/Discounts"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Permissions = lazy(() => import("../pages/Permissions"));
const Orders = lazy(() => import("../pages/Orders"));
const Roles = lazy(() => import("../pages/Roles"));
const Statistic = lazy(() => import("../pages/Statistic"));
const Billing = lazy(() => import("../pages/Billing"));

const routes = [
  {
    path: "/",
    layout: CustomerLayout,
    children: [
      { path: "/", public: true, element: Home },
      { path: "/about", public: true, element: AboutUs },
      { path: "/blog", public: true, element: Blog },
      { path: "/checkout", public: false, element: Checkout },
      { path: "/collection", public: true, element: Collection },
      { path: "/contact", public: true, element: Contact },
      { path: "/profile", public: false, element: Profile },
      { path: "/shop", public: true, element: Shop },
      { path: "/product/detail/:id", public: true, element: ProductDetail },
    ],
  },
  {
    path: "/profile",
    layout: ProfileLayout,
    children: [
      { path: "/profile/details", public: false, element: ProfileDetails },
      { path: "/profile/orders", public: false, element: ProfileOrders },
      { path: "/profile/chats", public: false, element: ProfileChats },
      { path: "/profile/address-book", public: false, element: AddressBook },
    ],
  },
  {
    path: "/admin",
    layout: AdminLayout,
    children: [
      { path: "/admin/dashboard", public: false, element: Dashboard },
      { path: "/admin/users", public: false, element: Users },
      { path: "/admin/products", public: false, element: Products },
      { path: "/admin/categories", public: false, element: Categories },
      { path: "/admin/discounts", public: false, element: Discounts },
      { path: "/admin/contacts", public: false, element: Contacts },
      { path: "/admin/permissions", public: false, element: Permissions },
      { path: "/admin/orders", public: false, element: Orders },
      { path: "/admin/roles", public: false, element: Roles },
      { path: "/admin/statistic", public: false, element: Statistic },
      { path: "/admin/billing", public: false, element: Billing },
    ],
  },
];

export default routes;
