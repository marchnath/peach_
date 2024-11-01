"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  ShoppingCart,
  X,
  Instagram,
  Facebook,
  Phone,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BiCheckDouble } from "react-icons/bi";

export default function Component() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsNavSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImage.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "ВОЛОСЫ", image: "/hair2.jpg?height=600&width=400" },
    { name: "НОГТЕВОЙ СЕРВИС", image: "/nails.webp?height=600&width=400" },
    { name: "БРОВИ И РЕСНИЦЫ", image: "/eyes2.webp?height=600&width=400" },
    { name: "МАКИЯЖ", image: "/makeup.png?height=600&width=400" },
    { name: "ДЕВИЧНИК", image: "/ladies.png?height=600&width=400" },
    { name: "ДЛЯ МУЖЧИН", image: "/mens.png?height=600&width=400" },
    // { name: "ДЛЯ ДЕТЕЙ", image: "/children.png?height=600&width=400" },
  ];

  const heroImage = [
    "eye.webp",
    "face.jpg",
    "hair.jpg",
    "nails.jpeg",
    "men.png",
  ];

  return (
    <div className="relative min-h-screen px-4 lg:px-0">
      {/* Main Navigation */}
      <nav
        className={`
          ${
            isNavSticky
              ? "fixed top-0 w-full animate-slideDown bg-white shadow-md"
              : ""
          }
          md:hidden z-50 bg-background flex items-center justify-between p-4
        `}
      >
        <Link
          href="https://www.google.com/"
          className="text-3xl font-bold text-[#e5958e]"
        >
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-50"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              УСЛУГИ
            </Link>
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ПРОДУКТЫ
            </Link>
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              КОНТАКТЫ
            </Link>
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ПРАЙС
            </Link>
            <Link href="https://www.google.com/">
              {" "}
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav
        className={`
          ${
            isNavSticky
              ? "fixed top-0 w-full animate-slideDown bg-white shadow-md"
              : ""
          }
          hidden md:block z-50 bg-background
        `}
      >
        <div className="container flex items-center justify-between py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
            >
              УСЛУГИ
            </Link>
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
            >
              ПРОДУКТЫ
            </Link>
          </div>
          <Link
            href="https://www.google.com/"
            className="text-3xl font-bold text-[#e5958e]"
          >
            <Image src="/logo.png" alt="logo" width={200} height={200} />
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
            >
              КОНТАКТЫ
            </Link>
            <Link
              href="https://www.google.com/"
              className="text-lg font-medium"
            >
              ПРАЙС
            </Link>
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="absolute -top-[10%] left-0  -z-20 w-full h-1/2 opacity-25 md:opacity-50 lg:opacity-100"
        style={{
          backgroundImage: "url('/blurry.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <section className="relative container py-12 max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 items-center gap-x-10">
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:8xl">
            Ваш Полный Сервис{" "}
            <span className="text-yellow-600 font-medium">Красоты</span>{" "}
          </h1>
          <Image
            src="/star.svg"
            className="absolute right-6 -top-10 sm:right-28 -z-20 "
            width={150}
            height={150}
            alt="circle"
          />
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-lg">
          <Image
            src={`/${heroImage[currentImageIndex]}`}
            alt="Hero"
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
        </div>
      </section>

      {/* Categories */}
      <div
        className="relative border-border bg-muted max-w-7xl mx-auto rounded-lg mb-12 px-4 overflow-x-auto"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 hidden lg:block bg-[#ca8a04] opacity-30"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="relative container flex items-center justify-between py-3 text-sm"
          style={{ zIndex: 2 }}
        >
          {categories.map((category) => (
            <Link
              href="https://www.google.com/"
              key={category.name}
              className="hover:text-primary px-2 rounded-lg text-nowrap  text-white hover:border lg:font-medium  lg:text-lg"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="container relative  max-w-7xl mx-auto">
        <Image
          src="/star.svg"
          className="absolute -left-1/4 -top-60 -z-20 "
          width={500}
          height={500}
          alt="circle"
        />
        <Image
          src="/star.svg"
          className="absolute -right-36 -bottom-20 -z-16 "
          width={200}
          height={200}
          alt="circle"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-white">
                <h3 className="mb-4 text-2xl font-bold">{category.name}</h3>
                <Link
                  href="https://www.google.com/"
                  className="border border-white rounded-lg  px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                >
                  ПОДРОБНЕЕ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-slate-100 absolute bottom-0 left-0 right-0 h-[26%] -z-10"></div>

      {/* About Section */}
      <section className="bg-muted py-10 lg:py-16 max-w-7xl mx-auto">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">О нас</h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            Салон красоты "PEACH" - ценит высокое качество услуг, экономию
            времени и комфорт, поэтому предоставляет большое количество
            параллельных услуг от лучших мастеров beauty - индустрии. Мы следим
            за последними тенденциями и воплощаем в жизнь самые модные и
            стильные образы.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row space-y-8 justify-between w-full">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Контакты</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +7(916)-818-44-44
              </p>
              <p className="flex items-center">
                <Instagram className="mr-2 h-4 w-4" />
                @peach.mos
              </p>
            </div>
          </div>
          <div className="space-y-4 max-w-96">
            <h3 className="text-xl font-bold">Адрес</h3>
            <p>119146, МОСКВА, ФРУНЗЕНСКАЯ НАБЕРЕЖНАЯ, 18</p>
          </div>
          <div className="space-y-4 w-fit">
            <h3 className="text-xl font-bold">Время работы</h3>
            <p>Пн-Вс 09:00-22:00</p>
            <p>Без выходных</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 max-w-7xl mx-auto">
        <div className="container flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="https://www.google.com/" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://www.google.com/" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>

      {/* Fixed Booking Button */}
      <Link
        href="https://www.google.com/"
        className="fixed bottom-8 right-8 text-lg  bg-[#513f1f] md:text-xl rounded-lg md:font-semibold px-4 py-2 md:px-6 md:py-3 text-white shadow-lg transition-transform hover:scale-105"
      >
        Онлайн запись
      </Link>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
