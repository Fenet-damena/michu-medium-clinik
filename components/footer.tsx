import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">HealthCare</h3>
            <p className="text-sm opacity-80">
              Your trusted partner in health and wellness since 2015.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-80 hover:opacity-100">About</Link></li>
              <li><Link href="/" className="opacity-80 hover:opacity-100">Services</Link></li>
              <li><Link href="/" className="opacity-80 hover:opacity-100">Doctors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Phone: (555) 123-4567</li>
              <li className="opacity-80">Email: info@healthcare.com</li>
              <li className="opacity-80">Hours: Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="/" className="opacity-80 hover:opacity-100">Facebook</Link>
              <Link href="/" className="opacity-80 hover:opacity-100">Twitter</Link>
              <Link href="/" className="opacity-80 hover:opacity-100">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 HealthCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
