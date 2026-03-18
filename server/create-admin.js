const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function createAdmin() {
  console.log('Forging Admin Credentials...');
  
  const username = 'admin';
  const plainPassword = 'adminpassword123'; // You can change this later
  
  // Hash the password for security
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(plainPassword, salt);

  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({ where: { username } });
  if (existingAdmin) {
    console.log('Admin account already exists!');
    process.exit(0);
  }

  // Create the admin
  await prisma.admin.create({
    data: { username, passwordHash }
  });

  console.log('✅ Admin account created successfully!');
  console.log(`Username: ${username}`);
  console.log(`Password: ${plainPassword}`);
}

createAdmin()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());