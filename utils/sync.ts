// import { getAuth, clerkClient } from "@clerk/nextjs/server";
// import { NextRequest } from "next/server";
// import { prisma } from "./../prisma/prisma";

// // Fungsi untuk sinkronisasi pengguna
// export const syncUserWithClerk = async (req: NextRequest) => {
//   const { userId } = getAuth(req); // Mendapatkan userId dari Clerk

//   if (!userId) {
//     throw new Error("User is not authenticated");
//   }

//   // Mengambil data pengguna dari Clerk
//   const user = await clerkClient.users.getUser(userId);

//   // Periksa apakah pengguna sudah ada di database
//   const existingUser = await prisma.user.findFirst({
//     where: {
//       clerk_user_id: userId,
//     },
//   });

//   if (!existingUser) {
//     // Jika pengguna belum ada, tambahkan ke database
//     await prisma.user.create({
//       data: {
//         clerk_user_id: userId,
//         email: user.emailAddresses[0].emailAddress, // Mengambil email pengguna
//         name: user.firstName + " " + user.lastName, // Menggabungkan nama depan dan belakang
//       },
//     });
//   } else {
//     // Jika pengguna sudah ada, perbarui datanya (jika perlu)
//     await prisma.user.update({
//       where: { clerk_user_id: userId },
//       data: {
//         email: user.emailAddresses[0].emailAddress,
//         name: user.firstName + " " + user.lastName,
//       },
//     });
//   }
// };
