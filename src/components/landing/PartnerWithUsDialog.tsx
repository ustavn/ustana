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
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof typeof form>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: hook up email backend later
    await new Promise((r) => setTimeout(r, 500));
    toast.success("Đã gửi yêu cầu hợp tác. Chúng tôi sẽ liên hệ sớm!");
    setForm(initialForm);
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Hợp Tác Với Chúng Tôi</DialogTitle>
          <DialogDescription>
            Để lại thông tin, đội ngũ USTA sẽ liên hệ để trao đổi cơ hội hợp tác.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="partnerContactName">
              Contact name <span className="text-destructive">*</span>
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
              Mr / Ms <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.title}
              onValueChange={(v) => set("title", v)}
              required
            >
              <SelectTrigger id="partnerTitle">
                <SelectValue placeholder="Chọn xưng hô" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr">Mr</SelectItem>
                <SelectItem value="Ms">Ms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="partnerEmail">
                Email <span className="text-destructive">*</span>
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
                Phone <span className="text-destructive">*</span>
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
              Organization <span className="text-destructive">*</span>
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
              Business / Service <span className="text-destructive">*</span>
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
              <Label htmlFor="partnerLocation">Location</Label>
              <Input
                id="partnerLocation"
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="partnerCompanySize">Company size</Label>
              <Select
                value={form.companySize}
                onValueChange={(v) => set("companySize", v)}
              >
                <SelectTrigger id="partnerCompanySize">
                  <SelectValue placeholder="Chọn quy mô" />
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
            <Label htmlFor="partnerPartnershipInterest">
              Partnership interest
            </Label>
            <Textarea
              id="partnerPartnershipInterest"
              rows={3}
              value={form.partnershipInterest}
              onChange={(e) => set("partnershipInterest", e.target.value)}
              placeholder="Mô tả ngắn về hình thức hợp tác bạn quan tâm"
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Đang gửi..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerWithUsDialog;
