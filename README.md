# PhotoSharing 📸

A modern React Native mobile application for event-based photo sharing, built with Expo and powered by Supabase and Cloudinary.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F3A?style=for-the-badge&logo=expo&logoColor=000020)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

## ✨ Features

- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- 📸 **Camera Integration**: Capture photos with front/back camera switching
- 🎯 **Event-Based Sharing**: Create and join events to share photos within groups
- ☁️ **Cloud Storage**: Photos uploaded to Cloudinary for fast delivery
- 🔐 **Anonymous Authentication**: Secure user sessions without traditional sign-up
- 🎨 **Image Processing**: Automatic artistic filters applied to photos
- ⚡ **Real-time Updates**: Powered by Supabase for instant photo sharing
- 🎨 **Modern UI**: Beautiful interface built with NativeWind (Tailwind CSS)

## 🚀 Tech Stack

### Frontend
- **React Native** with Expo SDK 54
- **Expo Router** for navigation
- **NativeWind** for styling (Tailwind CSS)
- **Expo Camera** for photo capture
- **React Context** for state management

### Backend & Services
- **Supabase** (PostgreSQL database + Auth)
- **Cloudinary** for image storage and processing
- **AsyncStorage** for local data persistence

### Development Tools
- **TypeScript** for type safety
- **Prettier** for code formatting
- **Metro** bundler

## 📱 Screenshots

*Coming soon - Add screenshots of the app in action*

## 🏗️ Architecture

### Database Schema

The app uses a PostgreSQL database with the following main entities:

- **events**: Event information (id, name, created_at)
- **assets**: Photo assets linked to events (asset_id, event_id, user_id, created_at)
- **profiles**: User profiles (id, full_name, username, avatar_url, etc.)
- **event_memberships**: User-event relationships

### Project Structure

```
PhotoSharing/
├── src/
│   ├── app/                    # Expo Router pages
│   │   ├── _layout.tsx        # Root layout with navigation
│   │   ├── index.tsx          # Home screen (redirects to camera)
│   │   └── events/[id]/
│   │       └── camera.tsx     # Camera screen
│   ├── components/            # Reusable UI components
│   │   ├── AssetItem.tsx      # Photo display component
│   │   └── EventListItem.tsx  # Event list item component
│   ├── lib/                   # Core libraries
│   │   ├── supabase.ts        # Supabase client configuration
│   │   └── cloudinary.ts      # Cloudinary configuration
│   ├── providers/             # Context providers
│   │   └── AuthProvider.tsx   # Authentication context
│   ├── services/              # Business logic
│   │   ├── assets.ts          # Asset management
│   │   └── events.ts          # Event management
│   └── types/                 # TypeScript types
│       └── supabase.ts        # Database types
├── supabase/                  # Supabase configuration
│   └── config.toml           # Database configuration
├── assets/                    # App assets
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Supabase account
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PhotoSharing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   ```

4. **Supabase Setup**
   
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the database migrations:
   ```bash
   npx supabase db reset
   ```
   
   - Generate TypeScript types:
   ```bash
   npm run supa:types
   ```

5. **Cloudinary Setup**
   
   - Create a cloud at [cloudinary.com](https://cloudinary.com)
   - Create an unsigned upload preset named `new-data`

### Running the App

#### Development

```bash
# Start the development server
npm start

# Run on specific platforms
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

#### Production Build

```bash
# Create a production build
eas build --platform all
```

## 🔧 Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run supa:types` - Generate Supabase TypeScript types

### Code Style

The project uses:
- **Prettier** for code formatting
- **NativeWind** for styling (Tailwind CSS for React Native)
- **TypeScript** for type safety

### Database Migrations

To apply database changes:

```bash
# Create a new migration
npx supabase migration new migration_name

# Apply migrations
npx supabase db reset
```

## 📦 Deployment

### EAS Build

The app is configured for EAS (Expo Application Services) builds:

1. **Install EAS CLI**
   ```bash
   npm install -g @expo/cli eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Build for all platforms**
   ```bash
   eas build --platform all
   ```

### Environment Variables

Make sure to set these environment variables in your EAS build:
- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write TypeScript for all new code
- Use NativeWind for styling
- Add appropriate error handling
- Test on multiple platforms

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing React Native platform
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Cloudinary](https://cloudinary.com/) for image processing and delivery
- [NativeWind](https://www.nativewind.dev/) for the utility-first styling

## 📞 Support

For support, email support@photosharing.app or join our Discord community.

---

**Built with ❤️ by the PhotoSharing team**