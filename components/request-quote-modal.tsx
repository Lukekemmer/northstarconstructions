"use client";

import { useModalStore } from "@/store/use-modal-store";
import { Dialog, DialogContent } from "./ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const RequestQuoteModal = () => {
  const { isOpen, close } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <div className="w-full max-w-md">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Request A Quote</FieldLegend>
                <FieldDescription>
                  Please fill in the details below to get an estimated quote from us.
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="fullname_request_quote">Full Name</FieldLabel>
                    <Input
                      id="fullname_request_quote"
                      placeholder="Megan Williams"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email_request_quote">Email Address</FieldLabel>
                    <Input
                      id="email_request_quote"
                      placeholder="m.williams10@abc.com"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone_request_quote">Phone Number</FieldLabel>
                    <Input
                      id="phone_request_quote"
                      placeholder="(657) 289-7153"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="project_request_quote">
                      What Type of Project Are You Planning?
                    </FieldLabel>
                    <Select defaultValue="" required>
                      <SelectTrigger id="project_request_quote">
                        <SelectValue placeholder="New Construction" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New Construction">New Construction</SelectItem>
                        <SelectItem value="Renovation / Remodeling">
                          Renovation / Remodeling
                        </SelectItem>
                        <SelectItem value="Extension or Add-On">
                          Extension or Add-On
                        </SelectItem>
                        <SelectItem value="Repairs & Maintenance">
                          Repairs & Maintenance
                        </SelectItem>
                        <SelectItem value="Other / Custom Project">
                          Other / Custom Project
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="hear_about_us_request_quote">
                      How Did You Hear About Us?{" "}
                      <span className="text-xs font-light">(optional)</span>
                    </FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="hear_about_us_request_quote">
                        <SelectValue placeholder="Friend or Family Referral" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Google Search">Google Search</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Friend or Family Referral">
                          Friend or Family Referral
                        </SelectItem>
                        <SelectItem value="Online Advertisement">
                          Online Advertisement
                        </SelectItem>
                        <SelectItem value="Returning Customer">
                          Returning Customer
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="project_brief_request_quote">
                      Tell Us a Little About Your Project
                    </FieldLabel>
                    <Textarea
                      id="project_brief_request_quote"
                      className="resize-none"
                      required
                    />
                  </Field>
                  <Field orientation="horizontal">
                    <Button type="submit">Submit</Button>
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuoteModal;
