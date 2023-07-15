import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddBook() {
  return (
    <div className="flex justify-center items-center h-[100vh] text-primary my-8">
      <div className="max-w-3xl w-full">
        <h1 className="my-8 font-bold text-2xl">Add a new book</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="title">
                  Title<sup className="text-red-500 text-base">*</sup>
                </Label>
                <Input type="text" id="title" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="author">
                  Author<sup className="text-red-500 text-base">*</sup>
                </Label>
                <Input type="text" id="author" className="mt-2" required />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input type="text" id="thumbnail" className="mt-2" placeholder='img url'/>
              </div>
              <div>
                <Label className="mt-2" htmlFor="date">
                  Publication Date
                  <sup className="text-red-500 text-base">*</sup>
                </Label>
                <div className="mt-2">
                  <DatePickerWithPresets />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className='w-full'>
              <Label htmlFor="genre">
                Genre<sup className="text-red-500 text-base">*</sup>
              </Label>
              <Input type="text" id="genre" className="mt-2" required />
            </div>
            <div className='w-full'>
              <Label htmlFor="rating">
                Rating<sup className="text-red-500 text-base">*</sup>
              </Label>
              <Input type="text" id="rating" className="mt-2" required  placeholder='give rating out of 5'/>
            </div>
          </div>
          <Button className="w-full mt-12">Add New Book</Button>
        </div>
      </div>
    </div>
  );
}
