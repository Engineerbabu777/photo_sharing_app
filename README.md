# 📸 PhotoSharing - Event-Based Photo Sharing App

A modern, cross-platform React Native application for seamless event-based photo sharing. Built with Expo, powered by Supabase, and enhanced with Cloudinary for professional image processing.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F3A?style=for-the-badge&logo=expo&logoColor=000020)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

### 🎯 Core Functionality
- **📱 Cross-Platform**: iOS, Android, and Web support
- **📸 Camera Integration**: Capture photos with front/back camera switching
- **🎪 Event-Based Sharing**: Create and join events for group photo sharing
- **☁️ Cloud Storage**: Automatic upload to Cloudinary for fast, global delivery
- **🔐 Anonymous Authentication**: Secure user sessions without traditional signup
- **🎨 AI-Powered Filters**: Automatic artistic filters applied to photos
- **⚡ Real-time Updates**: Instant photo sharing powered by Supabase
- **🔗 QR Code Sharing**: Easy event invitation via QR codes
- **🎨 Modern UI**: Beautiful interface with NativeWind (Tailwind CSS)

### 🛠️ Technical Features
- **Type-Safe**: Full TypeScript implementation
- **Offline Support**: Local storage with AsyncStorage
- **Image Optimization**: Automatic thumbnail generation and resizing
- **Error Handling**: Comprehensive error boundaries and validation
- **Performance**: React Query for efficient data caching
- **Navigation**: File-based routing with Expo Router

## 🚀 Tech Stack

### Frontend
- **React Native** (v0.81.5) with **Expo SDK 54**
- **Expo Router** for navigation and file-based routing
- **NativeWind** (v4.2.1) for styling (Tailwind CSS for React Native)
- **Expo Camera** for photo capture and camera controls
- **React Query** (v5.90.12) for server state management
- **Galeria** for advanced image gallery functionality

### Backend & Services
- **Supabase** - PostgreSQL database, authentication, and real-time subscriptions
- **Cloudinary** - Image storage, processing, and CDN delivery
- **AsyncStorage** - Local data persistence and session management

### Development & Build Tools
- **TypeScript** (v5.9.2) for type safety and developer experience
- **Metro Bundler** for React Native bundling
- **Prettier** with Tailwind CSS plugin for code formatting
- **EAS Build** for building production applications

## 📱 Screenshots & Demo

*Note: Add your own screenshots here to showcase the app in action*

## 🏗️ Architecture

### 📊 Database Schema

The application uses a PostgreSQL database with the following main entities:

#### **Events Table**
```sql
- id: string (primary key)
- name: string (event name)
- owner_id: string (foreign key to profiles)
- created_at: timestamp
```

#### **Assets Table**
```sql
- id: number (primary key)
- event_id: string (foreign key to events)
- user_id: string (foreign key to profiles)
- asset_id: string (Cloudinary public ID)
- created_at: timestamp
```

#### **Profiles Table**
```sql
- id: string (primary key, linked to auth.users)
- username: string (optional)
- full_name: string (optional)
- avatar_url: string (optional)
- website: string (optional)
- updated_at: timestamp
```

#### **Event Memberships Table**
```sql
- id: number (primary key)
- event_id: string (foreign key to events)
- user_id: string (foreign key to profiles)
- created_at: timestamp
```

### 🗂️ Project Structure

```
PhotoSharing/
├── 📁 assets/                    # Static assets (icons, splash screens)
│   ├── icon.png
│   ├── adaptive-icon.png
│   ├── favicon.png
│   └── splash-icon.png
├── 📁 src/
│   ├── 📁 app/                   # Expo Router pages (File-based routing)
│   │   ├── _layout.tsx          # Root layout with navigation and providers
│   │   ├── index.tsx            # Home screen (events list)
│   │   ├── events/
│   │   │   ├── create.tsx       # Create event modal
│   │   │   └── [id]/
│   │   │       ├── camera.tsx   # Camera screen for photo capture
│   │   │       ├── index.tsx    # Event details and photo gallery
│   │   │       ├── join.tsx     # Join event screen
│   │   │       └── share.tsx    # Share event via QR code
│   ├── 📁 components/            # Reusable UI components
│   │   ├── AssetItem.tsx        # Photo display component with Cloudinary
│   │   └── EventListItem.tsx    # Event list item component
│   ├── 📁 lib/                   # Core library configurations
│   │   ├── supabase.ts          # Supabase client setup
│   │   └── cloudinary.ts        # Cloudinary client and upload functions
│   ├── 📁 providers/             # React Context providers
│   │   └── AuthProvider.tsx     # Authentication context and hooks
│   ├── 📁 services/              # Business logic and API calls
│   │   ├── assets.ts            # Asset management operations
│   │   └── events.ts            # Event management operations
│   ├── 📁 types/                 # TypeScript type definitions
│   │   └── supabase.ts          # Generated Supabase types
│   └── 📁 styles/               # Global styles and themes
│       └── global.css           # NativeWind global styles
├── 📁 supabase/                  # Supabase configuration
│   ├── config.toml              # Database configuration
│   └── migrations/              # Database migrations (if any)
├── 📄 app.json                   # Expo configuration
├── 📄 package.json              # Dependencies and scripts
├── 📄 tailwind.config.js        # Tailwind/NativeWind configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 babel.config.js           # Babel configuration
├── 📄 metro.config.js           # Metro bundler configuration
└── 📄 eas.json                  # EAS Build configuration
```

## 🚀 Getting Started

### ⚠️ IMPORTANT: Setup Requirements

**Before you begin, you MUST create your own accounts and obtain your own API keys:**

1. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
2. **Cloudinary Account**: Sign up at [cloudinary.com](https://cloudinary.com)
3. **Expo Account**: Sign up at [expo.dev](https://expo.dev) (for building and deployment)

### 📋 Prerequisites

- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** (`npm install -g @expo/cli`)
- **iOS Simulator** (Mac only) or **Android Emulator**
- **Git** for version control

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd PhotoSharing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### 🔑 Environment Setup

**You MUST create your own environment configuration files:**

#### 1. Create `.env.local` file in the root directory:
```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Cloudinary Configuration  
EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

#### 2. Update `app.json` with your details:
```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "scheme": "your-app-scheme",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourname.yourapp",
      "appleTeamId": "YOUR_APPLE_TEAM_ID"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourname.yourapp",
      "permissions": [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

#### 3. Update `package.json` with your app details:
```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "main": "expo-router/entry"
}
```

### 🗄️ Database Setup

#### 1. **Supabase Setup**

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your URL and anon key
3. Create the following tables in your Supabase SQL Editor:

```sql
-- Enable RLS (Row Level Security)
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  website TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create assets table
CREATE TABLE assets (
  id BIGSERIAL PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  asset_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create event_memberships table
CREATE TABLE event_memberships (
  id BIGSERIAL PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(event_id, user_id)
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_memberships ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view events they own or are members of" ON events FOR SELECT 
USING (owner_id = auth.uid() OR id IN (SELECT event_id FROM event_memberships WHERE user_id = auth.uid()));

CREATE POLICY "Users can create events" ON events FOR INSERT WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Users can view assets in events they have access to" ON assets FOR SELECT 
USING (event_id IN (SELECT id FROM events WHERE owner_id = auth.uid() OR id IN (SELECT event_id FROM event_memberships WHERE user_id = auth.uid())));

CREATE POLICY "Users can insert assets to events they have access to" ON assets FOR INSERT 
WITH CHECK (event_id IN (SELECT id FROM events WHERE owner_id = auth.uid() OR id IN (SELECT event_id FROM event_memberships WHERE user_id = auth.uid())));

CREATE POLICY "Users can view event memberships for events they have access to" ON event_memberships FOR SELECT 
USING (event_id IN (SELECT id FROM events WHERE owner_id = auth.uid() OR id IN (SELECT event_id FROM event_memberships WHERE user_id = auth.uid())));

CREATE POLICY "Users can join events" ON event_memberships FOR INSERT WITH CHECK (auth.uid() = user_id);
```

#### 2. **Generate TypeScript Types**
```bash
npm run supa:regen:types
```

### ☁️ Cloudinary Setup

1. Create a cloud at [cloudinary.com](https://cloudinary.com)
2. Go to Settings > Account to get your cloud name
3. Go to Settings > Upload and create an unsigned upload preset:
   - **Preset name**: `new-data`
   - **Signing mode**: `Unsigned`
   - **Folder**: (optional)
   - **Allowed formats**: `jpg, png, gif, webp`
   - **Max file size**: `10MB`

### 🏃‍♂️ Running the App

#### Development Mode

```bash
# Start the development server
npm start

# Run on specific platforms
npm run ios      # iOS simulator (Mac only)
npm run android  # Android emulator
npm run web      # Web browser

# Run on physical device (iOS)
npm run physical
```

#### Using Expo Go (Recommended for testing)

1. Download Expo Go app on your device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Start the development server:
   ```bash
   npm start
   ```

3. Scan the QR code with Expo Go app

## 🔧 Configuration

### 🎨 App Customization

#### **Update App Icons and Splash Screen**
Replace files in the `assets/` directory:
- `icon.png` - Main app icon (1024x1024px)
- `adaptive-icon.png` - Android adaptive icon (1024x1024px)
- `favicon.png` - Web favicon (512x512px)
- `splash-icon.png` - Splash screen icon (1284x2778px)

#### **Update App Configuration**
Edit `app.json` to customize:
- App name and description
- Bundle identifiers and package names
- Permissions and capabilities
- Build settings and metadata

#### **Styling and Themes**
- Modify `tailwind.config.js` for custom styling
- Update `src/styles/global.css` for global styles
- Edit component files for specific UI changes

### 🔐 Security Configuration

#### **Environment Variables**
Ensure these are properly configured in production:
- Use production Supabase URL and keys
- Use production Cloudinary cloud name
- Set up proper CORS policies in Supabase

#### **Supabase RLS Policies**
Review and customize Row Level Security policies based on your needs:
- Adjust read/write permissions
- Add custom business logic
- Set up proper user isolation

### 📊 Database Migrations

To modify the database schema:

```bash
# Create a new migration
npx supabase migration new your_migration_name

# Apply migrations
npx supabase db reset

# Generate updated types
npm run supa:regen:types
```

## 🚀 Deployment

### 📱 EAS Build Setup

1. **Install EAS CLI**
   ```bash
   npm install -g @expo/cli eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure EAS**
   ```bash
   eas build:configure
   ```

4. **Set up build profiles** in `eas.json`:
   ```json
   {
     "cli": {
       "version": ">= 5.0.0"
     },
     "build": {
       "development": {
         "developmentClient": true,
         "distribution": "internal"
       },
       "preview": {
         "distribution": "internal"
       },
       "production": {}
     }
   }
   ```

### 🔧 Environment Variables for Production

Set these in your EAS build dashboard or using CLI:
```bash
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_URL --value your_prod_supabase_url
eas secret:create --scope project --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value your_prod_supabase_key
eas secret:create --scope project --name EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME --value your_prod_cloudinary_name
```

### 📱 Building for Production

```bash
# Build for all platforms
eas build --platform all

# Build for specific platforms
eas build --platform ios
eas build --platform android

# Build development client
eas build --profile development --platform all
```

### 🌐 Web Deployment

For web deployment, consider:
- **Vercel**: Easy integration with Expo Router
- **Netlify**: Simple static site hosting
- **Firebase Hosting**: Google's web hosting platform

```bash
# Build for web
npx expo export:web

# Deploy to Vercel
npx vercel --prod
```

## 🧪 Development

### 📝 Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm run physical` - Run on physical iOS device
- `npm run supa:regen:types` - Generate Supabase TypeScript types
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### 🏗️ Development Workflow

1. **Start with Environment Setup**
   ```bash
   npm install
   npm start
   ```

2. **Make Changes**
   - Edit components in `src/components/`
   - Update screens in `src/app/`
   - Modify styles with NativeWind classes
   - Add new services in `src/services/`

3. **Test Changes**
   ```bash
   # Test on different platforms
   npm run ios
   npm run android
   npm run web
   ```

4. **Database Changes**
   ```bash
   # Create migration
   npx supabase migration new your_feature
   
   # Apply changes
   npx supabase db reset
   
   # Update types
   npm run supa:regen:types
   ```

### 📐 Code Style and Standards

#### **TypeScript**
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Use Supabase generated types

#### **NativeWind Styling**
- Use utility classes for consistent design
- Follow mobile-first responsive design
- Utilize dark theme support

#### **Component Structure**
```typescript
// Example component structure
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tables } from "@/types/supabase";

type ComponentProps = {
  // Define props with proper types
};

export default function Component({ prop }: ComponentProps) {
  return (
    <View className="p-4 bg-neutral-800 rounded-lg">
      <Text className="text-white text-lg font-semibold">
        Content
      </Text>
    </View>
  );
}
```

#### **API Service Pattern**
```typescript
// Example service structure
import { supabase } from "@/lib/supabase";
import { TablesInsert } from "@/types/supabase";

export async function serviceFunction(
  data: TablesInsert<"table_name">
) {
  const { data, error } = await supabase
    .from("table_name")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return data;
}
```

### 🧪 Testing

#### **Unit Testing**
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react-native jest

# Run tests
npm test
```

#### **E2E Testing**
Consider using:
- **Detox** for end-to-end testing
- **Maestro** for mobile UI testing
- **Expo Application Services (EAS)** for cloud testing

### 📊 Performance Optimization

#### **Image Optimization**
- Use Cloudinary's transformation features
- Implement lazy loading for image galleries
- Optimize image sizes for different screen densities

#### **Database Optimization**
- Use Supabase indexes for frequently queried columns
- Implement pagination for large datasets
- Use real-time subscriptions efficiently

#### **Memory Management**
- Implement proper cleanup in useEffect hooks
- Use React Query for efficient caching
- Optimize image rendering in lists

## 🐛 Troubleshooting

### Common Issues

#### **Build Errors**
```bash
# Clear cache and reinstall
npm start --clear

# Reset Metro bundler cache
npx expo start --clear

# Reinstall dependencies
rm -rf node_modules
npm install
```

#### **Environment Variable Issues**
- Ensure `.env.local` is in the root directory
- Restart the development server after changing env variables
- Check that variables start with `EXPO_PUBLIC_`

#### **Camera Permission Issues**
```bash
# iOS - reset simulator camera permissions
# Android - check app permissions in device settings
```

#### **Supabase Connection Issues**
- Verify URL and keys are correct
- Check Supabase project status
- Ensure RLS policies allow your operations

#### **Cloudinary Upload Issues**
- Verify cloud name is correct
- Check upload preset configuration
- Ensure unsigned upload is enabled

### 🔍 Debug Mode

Enable debug logging:
```typescript
// Add to your components
console.log("Debug info:", data);

// Use React Query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
```

### 📱 Device Testing

#### **iOS Testing**
```bash
# Test on physical device
npm run physical

# Install on simulator
npm run ios
```

#### **Android Testing**
```bash
# Start Android emulator
emulator -avd <avd_name>

# Test on physical device
adb devices
npm run android
```

## 🤝 Contributing

### 📋 Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow coding standards**:
   - Use TypeScript for all new code
   - Follow NativeWind styling conventions
   - Add proper error handling
   - Write descriptive commit messages

### 🏗️ Development Setup

1. **Clone your fork**
2. **Install dependencies**: `npm install`
3. **Set up environment variables**
4. **Run tests**: `npm test`
5. **Start development server**: `npm start`

### 📝 Pull Request Process

1. **Update documentation** for any new features
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update the changelog**
5. **Submit pull request** with detailed description

### 🎯 Development Priorities

- **Performance**: Optimize for mobile devices
- **Accessibility**: Support screen readers and keyboard navigation
- **Internationalization**: Support multiple languages
- **Offline Support**: Enable basic functionality without internet

## 📝 API Reference

### 🔐 Authentication

#### Anonymous Authentication
```typescript
// Automatic anonymous sign-in
const { data } = await supabase.auth.signInAnonymously();

// Get current user
const { data: { user } } = await supabase.auth.getUser();
```

### 📊 Database Operations

#### Events
```typescript
// Get user's events
const { data } = await supabase
  .from("event_memberships")
  .select("*, events(*)")
  .eq("user_id", userId);

// Create event
const { data } = await supabase
  .from("events")
  .insert({ name, owner_id: userId })
  .select()
  .single();
```

#### Assets
```typescript
// Upload asset
const { data } = await supabase
  .from("assets")
  .insert({ event_id, user_id, asset_id });

// Get event assets
const { data } = await supabase
  .from("assets")
  .select("*, profiles(*)")
  .eq("event_id", eventId);
```

### ☁️ Cloudinary Operations

#### Upload Image
```typescript
const uploadToCloudinary = async (fileUri: string) => {
  const result = await upload(cloudinary, {
    file: fileUri,
    options: {
      upload_preset: "new-data",
      unsigned: true,
    },
  });
  return result;
};
```

#### Image Transformation
```typescript
// Apply artistic filter
const transformedUrl = cloudinary
  .image(assetId)
  .resize(thumbnail().width(300).height(400))
  .effect(artisticFilter("al_dente"))
  .toURL();
```

## 📊 Monitoring and Analytics

### 📈 Performance Monitoring

Consider integrating:
- **Sentry** for error tracking
- **Expo Analytics** for usage tracking
- **Cloudinary Analytics** for image performance

### 🔍 Logging

```typescript
// Add structured logging
console.log("User action", {
  action: "photo_captured",
  eventId,
  userId,
  timestamp: new Date().toISOString(),
});
```

## 🔒 Security Considerations

### 🛡️ Best Practices

1. **Environment Variables**
   - Never commit sensitive keys to git
   - Use different keys for development and production
   - Rotate keys regularly

2. **Supabase Security**
   - Enable Row Level Security (RLS) on all tables
   - Use proper authentication policies
   - Validate user permissions for all operations

3. **Image Security**
   - Validate image uploads
   - Use Cloudinary transformations for safe image delivery
   - Implement rate limiting for uploads

4. **Network Security**
   - Use HTTPS in production
   - Implement proper CORS policies
   - Validate all user inputs

### 🔐 Privacy

- **Data Collection**: Clearly document what data is collected
- **User Consent**: Implement proper consent mechanisms
- **Data Retention**: Define clear data retention policies
- **GDPR Compliance**: Ensure compliance with privacy regulations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team** - For the incredible React Native platform and tools
- **Supabase Team** - For providing the backend infrastructure
- **Cloudinary Team** - For image processing and delivery solutions
- **NativeWind Team** - For the utility-first styling approach
- **React Native Community** - For the amazing ecosystem and libraries

## 📞 Support

### 🆘 Getting Help

- **Documentation**: Check this README and inline code comments
- **Issues**: Create GitHub issues for bugs and feature requests
- **Community**: Join React Native and Expo communities
- **Discord**: Join the official Expo Discord server

### 📧 Contact

For support and questions:
- **Email**: support@yourapp.com
- **Website**: https://yourapp.com
- **Documentation**: https://docs.yourapp.com

### 🚀 Roadmap

#### Upcoming Features
- [ ] **Video Support** - Capture and share videos
- [ ] **Live Photos** - iOS Live Photo integration
- [ ] **Advanced Filters** - Custom filter creation
- [ ] **Collaborative Editing** - Group photo editing
- [ ] **AI Features** - Auto-tagging and smart categorization
- [ ] **Offline Mode** - Offline photo capture and sync
- [ ] **Push Notifications** - Real-time event updates
- [ ] **Social Features** - Comments and reactions
- [ ] **Export Options** - Download and share albums
- [ ] **Analytics Dashboard** - Event and usage analytics

---

## 📋 Changelog

### v1.0.0 (Current)
- ✨ Initial release with core photo sharing functionality
- 📸 Camera integration with front/back switching
- 🎪 Event-based photo sharing system
- ☁️ Cloudinary integration for image processing
- 🔐 Anonymous authentication via Supabase
- 📱 Cross-platform support (iOS, Android, Web)
- 🎨 Modern UI with NativeWind styling
- 🔗 QR code sharing for events
- ⚡ Real-time updates with Supabase subscriptions

---

**Built with ❤️ using React Native and Expo**

*Ready to share your moments? Get started by setting up your environment variables and creating your first event! 🚀*