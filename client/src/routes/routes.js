import { lazy } from "react";
import paths from "../configs/paths";

// Layouts
const AdminLayout = lazy(() => import("../layouts/Admin"));
const CustomerLayout = lazy(() => import("../layouts/Customer"));
const ProfileLayout = lazy(() => import("../layouts/Profile"));

// Customer Pages
const customerRoutes = [
  {
    path: paths.home,
    Page: lazy(() => import("../pages/Home")),
    isPublic: true,
  },
  {
    path: paths.about,
    Page: lazy(() => import("../pages/AboutUs")),
    isPublic: true,
  },
  {
    path: paths.blog,
    Page: lazy(() => import("../pages/Blog")),
    isPublic: true,
  },
  {
    path: paths.checkout,
    Page: lazy(() => import("../pages/Checkout")),
    isPublic: false,
  },
  {
    path: paths.collection,
    Page: lazy(() => import("../components/Collections")),
    isPublic: true,
  },
  {
    path: paths.contact,
    Page: lazy(() => import("../pages/Contact")),
    isPublic: true,
  },
  {
    path: paths.profile,
    Page: lazy(() => import("../pages/Profile")),
    isPublic: false,
  },
  {
    path: paths.shop,
    Page: lazy(() => import("../components/Shop")),
    isPublic: true,
  },
  {
    path: paths.productDetails,
    Page: lazy(() => import("../components/ProductDetail")),
    isPublic: true,
  },
];

// Profile Pages
const profileRoutes = [
  {
    path: paths.profileDetails,
    Page: lazy(() => import("../pages/Profile/Details")),
    isPublic: false,
  },
  {
    path: paths.profileOrders,
    Page: lazy(() => import("../pages/Profile/Orders")),
    isPublic: false,
  },
  {
    path: paths.profileChats,
    Page: lazy(() => import("../pages/Profile/Chats")),
    isPublic: false,
  },
  {
    path: paths.profileAddressBook,
    Page: lazy(() => import("../pages/Profile/AddressBook")),
    isPublic: false,
  },
];

// Admin Pages
const adminRoutes = [
  {
    path: paths.dashboard,
    Page: lazy(() => import("../pages/Dashboard")),
    isPublic: false,
  },
  {
    path: paths.users,
    Page: lazy(() => import("../pages/Users")),
    isPublic: false,
  },
  {
    path: paths.products,
    Page: lazy(() => import("../pages/Products")),
    isPublic: false,
  },
  {
    path: paths.categories,
    Page: lazy(() => import("../pages/Categories")),
    isPublic: false,
  },
  {
    path: paths.discounts,
    Page: lazy(() => import("../pages/Discounts")),
    isPublic: false,
  },
  {
    path: paths.contacts,
    Page: lazy(() => import("../pages/Contacts")),
    isPublic: false,
  },
  {
    path: paths.permissions,
    Page: lazy(() => import("../pages/Permissions")),
    isPublic: false,
  },
  {
    path: paths.orders,
    Page: lazy(() => import("../pages/Orders")),
    isPublic: false,
  },
  {
    path: paths.roles,
    Page: lazy(() => import("../pages/Roles")),
    isPublic: false,
  },
  {
    path: paths.statistic,
    Page: lazy(() => import("../pages/Statistic")),
    isPublic: false,
  },
  {
    path: paths.billings,
    Page: lazy(() => import("../pages/Billing")),
    isPublic: false,
  },
];

// Not Found Page
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = [
  { path: paths.admin, Layout: AdminLayout, children: adminRoutes },
  { path: paths.profile, Layout: ProfileLayout, children: profileRoutes },
  { path: paths.home, Layout: CustomerLayout, children: customerRoutes },
  { path: paths.notFound, Layout: null, Page: NotFound },
];

export default routes;
