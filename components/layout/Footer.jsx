export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-cream px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-brand-terracotta">Addis Eats</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Authentic Ethiopian and Eritrean flavors, prepared for Addis Ababa.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Hospitality Hours</h4>
          <p className="mt-2 text-sm text-brand-muted">Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
        </div>
        <div>
          <h4 className="font-bold">Addis Location</h4>
          <p className="mt-2 text-sm text-brand-muted">Bole Medhanialem, Addis Ababa</p>
        </div>
      </div>
    </footer>
  );
}
