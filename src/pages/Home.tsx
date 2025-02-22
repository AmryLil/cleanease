import CardHeader from '@/components/home/cardheader'
import { Button, buttonVariants } from '@/components/ui/button'
import MainLayout from '@/layouts/MainLayout'
import { Link } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <MainLayout>
      <div className='relative'>
        <div>
          <img className="h-auto md:h-[450px] max-w-full md:w-full object-cover rounded-lg" src="/images/banner.jpg" alt="" />
        </div>
        <div>
          <div className='absolute left-32 top-32 w-1/2 space-y-5'>
            <div className='text-slate-50 text-5xl font-bold'>LOREM IPSUN DOLOR SIT TIA SAYANGGG</div>
            <div>
              <p className='text-slate-50 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum reiciendis, perferendis repellat architecto nemo dolorem.
              </p>
              <Button variant="secondary">Button</Button>
            </div>
          </div>
          <div className='flex gap-4 justify-center -translate-y-14'>
            <CardHeader />
            <CardHeader />
            <CardHeader />

          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home