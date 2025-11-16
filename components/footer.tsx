import Link from 'next/link'

export default function Footer() {
  return (
    /* Updated footer with blue and white theme, clinic info */
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Michhu Medium Clinic</h3>
            <p className="text-sm opacity-90">
              Dedicated to providing exceptional OB/GYN care and support for women's health.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Doctors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Phone: (555) 123-4567</li>
              <li className="opacity-90">Email: info@michhumidium.com</li>
              <li className="opacity-90">Hours: Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Facebook</Link>
              <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Twitter</Link>
              <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Michhu Medium Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
