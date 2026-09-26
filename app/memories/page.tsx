import Image from "next/image";

export default function Memories() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      
      <section className="relative h-screen snap-start overflow-hidden">
        <h1 style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>Some of our memories together</h1>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <div>
        <Image
          src="/First.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              Our first photo together!
            </h1>
            <p>
              I was so excited to be invited to your birthday party. I felt so lucky to get to be a part of that so early, getting to meet your friends.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Aquarium.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              Our date to the aquarium
            </h1>
            <p>
              This was so cute, I was in awe the whole time of how pretty you are. I kept taking photos of you even though you didn't want me to, and I'm so happy I did because they're so cute to me.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Sleeping.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              Me sleeping
            </h1>
            <p>
              I like how this photo shows how comfortable I have always felt around you. We always have been able to sleep so easily with each other and I think that is so perfect.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Sunset.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              When we went to the beach
            </h1>
            <p>
              The sunset was actually so pretty, and it was so fun us racing to make it in time to see it. No matter how pretty the sunset was though, you were the real sight to see.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Facemask.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              When we did facemasks together
            </h1>
            <p>
              This was such a fun little time, I looked so silly with how small the facemask was compared to my face. 
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Girlfriend.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              I asked you to be my girlfriend
            </h1>
            <p>
              I was so excited to ask you, even though I had known it was going to happen for a while. It felt so amazing for it to be official, it truly was the most incredible moment.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Pub.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              At the pub the night after
            </h1>
            <p>
              This was a cute little date, it was nice to be able to have a proper celebration type thing. I was happy I was able to get a photo even though you didn't want one hehe.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Sussy.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              Whatever this is
            </h1>
            <p>
              This was just after the pub and I just find this photo so funny. I think it exemplifies the fun we have together, the way you make me laugh like no one else, it's such an amazing feeling.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Birthday.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              My Birthday!
            </h1>
            <p>
              I am so happy for the timing of everything working so nicely for us. The fact that you were able to meet my family when they so rarely come over was a dream come true. Getting to see you interact with my family, and see how much they love you just made me feel so lucky.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Starbear.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              You cuddling with Starbear
            </h1>
            <p>
              I love seeing you cuddling with Starbear. The fact that my day one homie can bring you such peace and comfort is so special to me. I love watching you reach out for Starbear the SECOND you hit the bed.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Tully's.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              When we went to Tully's
            </h1>
            <p>
              I just love how good we look in this photo together. Getting to be invited to Tully's birthday made me feel so special because it signified the fact that like I'm just a part of your life now.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Booth.jpg"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              The photobooth
            </h1>
            <p>
              The photobooth was so cute, especially the last photo of us kissing. And then for you to have posted it on your story and tagged me I was like omg. 
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/FirstAnniversary.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              Our first pookie day
            </h1>
            <p>
              Although we took a while to celebrate it, our pookie day was so cute. I loved just sitting there and listening to you talking about the food, and trying to offer my very ameteur opinions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <Image
          src="/Makeup.JPG"
          alt="Memory 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white md:pb-8">
          <div>
            <h1 className="text-4xl font-serif">
              You doing my makeup
            </h1>
            <p>
              This was a cute little evening. I loved how excited you were to do it, and the fact that I am the first person you've done makeup on makes me feel so special. I love doing these silly little things together.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-screen snap-start overflow-hidden">
        <div className="absolute inset-0 flex items-end px-8 pb-32 text-white bg-pink-400 md:pb-8">
          <div>
            <h1 className="text-2xl font-serif mb-40">
              That's all the photos for now
            </h1>
            <p className="text-base mt-8 md:text-2xl">
              I already have so many incredible memories with you, and it's only been a couple months. We have laughed together harder than I've ever laughed before. We've cried together which is something I never thought could happen. Spending time with you is so easy, easier than anything I've ever done before. You really have become my best friend, not just my girlfriend. The person I can tell anything to, the person I can just sit with. You are my person. <br></br><br></br> </p>
              <p className="text-base md:text-2xl">You make me so happy, happier than I ever thought would be possible. You give me a love I never expected to find, and I hope I am able to give you the same back. I can't wait for all the memories we're gonna keep making together. There are still so many firsts to happen and I can't wait to be there. <br></br> <br></br>
            </p>
            <p className="text-base md:text-2xl">
              I love you so much, you make me feel like the luckiest boy there ever was, and I'm gonna keep being the luckiest boy as I get to spend my entire life with you. <br></br> <br></br>
            </p>

            <p className="text-lg md:text-2xl">
              All my love,  <br></br> <br></br> Bug
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}