import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" size="icon" className="relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              initial={false}
            />
            <motion.div
              className="relative z-10 flex items-center justify-center w-full h-full"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                key="sun"
                initial={{ opacity: 1, rotate: 0, scale: 1 }}
                // animate={{ 
                //   opacity: [1, 0.8, 1],
                //   rotate: [0, 360],
                //   scale: [1, 1.1, 1]
                // }}
                // transition={{ 
                //   duration: 2,
                //   repeat: Infinity,
                //   ease: "easeInOut"
                // }}
                className="absolute"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 dark:opacity-0 dark:rotate-90 dark:scale-0 transition-all duration-500" />
              </motion.div>
              <motion.div
                key="moon"
                // initial={{ opacity: 0, rotate: 90, scale: 0 }}
                // animate={{ 
                //   opacity: [0, 1, 0.8, 1],
                //   rotate: [90, 0],
                //   scale: [0, 1, 1.1, 1]
                // }}
                // transition={{ 
                //   duration: 2,
                //   repeat: Infinity,
                //   ease: "easeInOut",
                //   delay: 1
                // }}
                className="absolute"
              >
                <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400 opacity-0 rotate-90 scale-0 dark:opacity-100 dark:rotate-0 dark:scale-100 transition-all duration-500" />
              </motion.div>
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border border-border/50">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}