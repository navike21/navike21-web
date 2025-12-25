export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
      </div>
    </div>
  )
}
