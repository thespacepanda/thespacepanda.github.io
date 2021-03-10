(ns spacepanda.app
  (:require [rum.core :as rum]))

(rum/defc label [text]
  [:div {:class "label"} text])

(rum/defc card [content]
  [:div.py-8.px-8.max-w-sm.mx-auto.bg-white.rounded-xl.shadow-md.space-y-2 content])

(rum/defc avatar [alt]
  [:img.block.rounded-full.max-h-48 {:src "/avatar.jpg" :alt alt}]) ;; avatar

(rum/defc page [content]
  [:div.flex.flex-col.space-y-2.min-h-screen.bg-blue-300 ;; page parent
   [:div.flex.items-center ;; hero
    (avatar "Space Panda Avatar")
    [:h1.text-6xl {:style {:font-family "Pacifico"} } "Space Panda"]] ;; page title
   [:div.flex.justify-center.space-x-2 ;; needs to loop over pages here ;; navbar
    [:p "bio"] ;; each of these will have an onClick
    [:p "code"]
    [:p "resume"]
    [:p "music"]
    [:p "blog"]]
   content])

(defn init []
  (rum/mount
   (page
    (card [:h1 "This is a card."]))
   (-> js/document
       (.getElementById "root"))))
