
"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext, translations } from '@/context/language-context';


export default function Contact() {
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const formSchema = z.object({
    email: z.string().email({ message: t.contact.validation.email }),
    message: z.string().min(10, { message: t.contact.validation.message }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:jeremiekoue8@gmail.com?subject=Contact depuis votre portfolio&body=${encodeURIComponent(
      `Email de l'expéditeur: ${values.email}\n\nMessage:\n${values.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: t.contact.toast.title,
      description: t.contact.toast.description,
    });
    form.reset();
  }

  const contactDetails = [
    { icon: Phone, text: "+228 79 79 79 40 / 70 06 01 66", href: "tel:+22879797940" },
    { icon: Mail, text: "jeremiekoue8@gmail.com", href: "mailto:jeremiekoue8@gmail.com" },
    { icon: MapPin, text: "Résidence du Bénin, 258 Av. Akeï, Tokoin-wuiti , Lomé", href: "#" },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-gradient leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground font-medium max-w-lg">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <Link
                  key={index}
                  href={detail.href}
                  target="_blank"
                  className="group flex items-center gap-6 p-6 rounded-[1.5rem] border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/5"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{detail.text}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.contact.form.email.placeholder}
                          className="h-14 px-6 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact.form.message.placeholder}
                          className="px-6 py-4 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all min-h-[160px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full h-14 text-base font-bold shadow-xl shadow-primary/20 group">
                  {t.contact.form.submit}
                  <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
