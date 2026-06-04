import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useI18n } from "@/i18n/I18nProvider";

interface Props {
  children: ReactNode;
}

const initialForm = {
  contactName: "",
  title: "",
  email: "",
  phone: "",
  organization: "",
  business: "",
  location: "",
  companySize: "",
  partnershipInterest: "",
};

const PartnerWithUsDialog = ({ children }: Props) => {
  const { t } = useI18n();
  const c = t.dialogs.common;
  const d = t.dialogs.partner;
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof typeof form>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    toast.success(d.toast);
    setForm(initialForm);
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{d.title}</DialogTitle>
          <DialogDescription>{d.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="partnerContactName">
              {c.contactName} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="partnerContactName"
              required
              value={form.contactName}
              onChange={(e) => set("contactName", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="partnerTitle">
              {c.title} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.title}
              onValueChange={(v) => set("title", v)}
              required
            >
              <SelectTrigger id="partnerTitle">
                <SelectValue placeholder={c.titlePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr">{c.mr}</SelectItem>
                <SelectItem value="Ms">{c.ms}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="partnerEmail">
                {c.email} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="partnerEmail"
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="partnerPhone">
                {c.phone} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="partnerPhone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="partnerOrganization">
              {c.organization} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="partnerOrganization"
              required
              value={form.organization}
              onChange={(e) => set("organization", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="partnerBusiness">
              {c.business} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="partnerBusiness"
              required
              value={form.business}
              onChange={(e) => set("business", e.target.value)}
            />
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="partnerLocation">{c.location}</Label>
              <Input
                id="partnerLocation"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="partnerCompanySize">{c.companySize}</Label>
              <Select
                value={form.companySize}
                onValueChange={(v) => set("companySize", v)}
              >
                <SelectTrigger id="partnerCompanySize">
                  <SelectValue placeholder={c.companySizePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="partnerPartnershipInterest">{d.interest}</Label>
            <Textarea
              id="partnerPartnershipInterest"
              rows={3}
              value={form.partnershipInterest}
              onChange={(e) => set("partnershipInterest", e.target.value)}
              placeholder={d.interestPlaceholder}
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? c.submitting : c.submit}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerWithUsDialog;
