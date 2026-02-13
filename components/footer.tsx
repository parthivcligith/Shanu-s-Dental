"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DownloadPublicButton } from "@/components/download-public-button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4">FEZA MATTRESSES</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience cloud-like comfort and superior support with Feza Mattresses. Quality sleep is our passion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors block">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#doctors" className="text-muted-foreground hover:text-primary transition-colors block">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors block">
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>Premium Showroom, Dubai<br />UAE</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>+971 4 500 0000</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>hello@fezamattresses.com</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter & Downloads */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
                <p className="text-muted-foreground mb-4">
                  Subscribe to get sleep tips, new products, and exclusive offers.
                </p>
                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>

              <div className="pt-4 border-t border-border/40">
                <h4 className="font-semibold text-lg mb-4">Resources</h4>
                <DownloadPublicButton />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Feza Mattresses. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
