"use client"

import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface Service {
  value: string
  label: string
  avatar?: string
}

interface ServiceSelectorProps {
  services: Service[]
  value?: string
  onValueChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function ServiceSelector({
  services,
  value,
  onValueChange,
  placeholder = "Select service...",
  className
}: ServiceSelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedService = services.find((service) => service.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between", className)}
        >
          {selectedService ? (
            <div className="flex items-center gap-2">
              {selectedService.avatar && (
                <span className="text-sm">{selectedService.avatar}</span>
              )}
              <span className="truncate">{selectedService.label}</span>
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search services..." />
          <CommandList>
            <CommandEmpty>No service found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value=""
                onSelect={() => {
                  onValueChange("")
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === "" ? "opacity-100" : "opacity-0"
                  )}
                />
                All Services
              </CommandItem>
              {services.map((service) => (
                <CommandItem
                  key={service.value}
                  value={service.value}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === service.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex items-center gap-2">
                    {service.avatar && (
                      <span className="text-sm">{service.avatar}</span>
                    )}
                    <span>{service.label}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
