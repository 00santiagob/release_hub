export interface Release extends ReleaseForm {
  id: string;
}

enum Platform {
  ANDROID = "Android",
  CHROMEOS = "ChromeOS",
  IOS = "iOS",
  LINUX = "Linux",
  MAC = "Mac",
  WEB = "Web",
  WINDOWS = "Windows"
}

export interface ReleaseForm {
  title: string;
  version: string;
  description?: string;
  platform: Platform[];
  releaseDate: Date;
  features: string[];
  improvements: string[];
  fixes: string[];
  uiChanges: string[];
  requirements: string[];
}
