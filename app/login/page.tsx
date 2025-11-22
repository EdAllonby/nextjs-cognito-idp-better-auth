import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Login</h1>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to access your account
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

