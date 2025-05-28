"use client"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import { usePathname } from "next/navigation"

import cn from "~/libs/cn"

interface TranslationsListModalProps {
  translations?: Translation[]
}

const TranslationsListModal = ({ translations }: TranslationsListModalProps) => {
  const pathname = usePathname()
  const selectedLang = pathname.split("/")[5]
  const baseUri = pathname.split("/").slice(0, 5).join("/")

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full mt-3">
      <button
        title="Change translation language"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-base-800 hover:bg-base-700 px-4 py-2 rounded-md text-sm tracking-wider hover:text-white w-full"
      >
        Translations
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-800 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-white">
                      Translations
                    </Dialog.Title>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="p-2 bg-base-700 hover:bg-base-700/70 rounded-full"
                    >
                      <IoMdClose />
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Link
                      href={baseUri}
                      className={cn(
                        "inline-flex w-full py-3 px-4 font-medium rounded-md border-2 border-base-700",
                        !selectedLang ? "bg-base-700" : "hover:bg-base-700"
                      )}
                    >
                      Default
                    </Link>
                    {translations?.map((translation, index) => (
                      <Link
                        href={baseUri + "/" + translation.language}
                        key={index}
                        className={cn(
                          "inline-flex w-full py-3 px-4 font-medium rounded-md border-2 border-base-700",
                          selectedLang?.toLowerCase() === translation.language.toLowerCase()
                            ? "bg-base-700"
                            : "hover:bg-base-700"
                        )}
                      >
                        {translation.language}
                      </Link>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default TranslationsListModal
