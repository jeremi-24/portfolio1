
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
    <section id="contact" className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.contact.title}</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    {t.contact.description}
                </p>
            </div>
            
            <div className="mb-12 space-y-4">
                {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <detail.icon className="h-5 w-5 text-accent" />
                        <Link href={detail.href} target="_blank" className="hover:underline">
                          <span>{detail.text}</span>
                        </Link>
                    </div>
                ))}
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder={t.contact.form.email.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                        <Textarea placeholder={t.contact.form.message.placeholder} {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    {t.contact.form.submit} <Send className="ml-2 h-4 w-4" />
                </Button>
                </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
