"use client"

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../ui/form';

import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { useState, useEffect } from 'react';

const formSchema = z.object({
    name: z.string().min(1, {
        message: "서버이름을 입력해주세요"
    }),
    imageUrl: z.string().min(1, {
        message: "서버사진을 입력해주세요"
    })
})

const InitialModal = () => {

    const [isMounted, setIsMounted] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    if (!isMounted) return null
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        ㅎㅇㅎㅇㅎ
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                    어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔어쩔
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <div className='space-y-8 px-6'>
                            <div className='flex items-center justify-center text-center'>
                                이미지 업로드하기
                            </div>
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Server Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visiable:ring-offset-0"
                                        placeholder="Enter Server Name"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant='primary' disabled={isLoading}>
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
 
export default InitialModal;