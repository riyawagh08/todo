import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      email: 'test@gmail.com',
      password: '123456',
      name: 'Test User',
    },
  ];

  // ✅ REGISTER
  register(name: string, email: string, password: string) {
    const exists = this.users.find((u) => u.email === email);

    if (exists) {
      return { success: false, message: 'User already exists' };
    }

    const newUser = {
      id: this.users.length + 1,
      name,
      email,
      password,
    };

    this.users.push(newUser);

    return {
      success: true,
      message: 'Registered successfully',
      user: newUser,
    };
  }

  // ✅ LOGIN (already working)
  login(email: string, password: string) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, message: 'Invalid credentials' };
    }

    return {
      success: true,
      message: 'Login successful',
      user,
    };
  }
}